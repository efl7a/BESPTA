import React, { Component } from 'react';
import { View, Text, Linking, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import { fetchPTA} from '../actions';
import { BESButton } from '../components/common/BESButton';

class BearBlastScreen extends Component {
  async componentDidMount() {
    if(this.props.pta.length === 0) {
      await this.props.fetchPTA()
    }
    if(this.props.pta.links.bearBlast) {
      Linking.openURL(this.props.pta.links.bearBlast)
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          Please sign up for the Bear Blast.  It is the best way to get up to the minute information delivered to your email every Tuesday.
        </Text>
        <View style={styles.buttonContainer}>
          <BESButton
            title="Signup for the Bear Blast"
            onPress={() => Linking.openURL(this.props.pta.links.bearBlastSignUp)}
          />
        </View>

      </View>
    );
  }
}


const styles = {
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItem: 'center',
    backgroundColor: '#ffffff'
  },
  textStyle: {
    fontSize: 25,
    textAlign: 'center'
  },
  buttonContainer: {
    height: 75,
    padding: 10
  }
};

const mapStateToProps = (state) => {
  return { pta: state.pta }
}

export default connect(mapStateToProps, { fetchPTA })(BearBlastScreen);
