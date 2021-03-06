import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { View, Text } from 'react-native';
import { getDistance } from 'geolib';

import { opHours } from '../map';
import { translate, precisionRound } from '../../_helpers';

export class CalloutContent extends Component {
  render() {
    const { data } = this.props;
    const { coords } = this.props.userlocation;
    return (
      <View>
        <Text>{data.name}</Text>
        <Text>{this.context.t(translate(data.type))}</Text>
        <Text>
          {this.context.t('distance')}:{' '}
          {precisionRound(
            getDistance(
              {
                latitude: coords.latitude,
                longitude: coords.longitude
              },
              {
                latitude: data.location.latitude,
                longitude: data.location.longitude
              }
            ) / 1000,
            1
          )}
          km
        </Text>
        <Text>{opHours(data, this.context)}</Text>
      </View>
    );
  }
}

CalloutContent.contextTypes = {
  t: PropTypes.func.isRequired
};

CalloutContent.propTypes = {
  data: PropTypes.object.isRequired,
  userlocation: PropTypes.object.isRequired
};
