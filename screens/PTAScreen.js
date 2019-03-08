import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, Linking } from 'react-native';
import { Image, Card, Button } from 'react-native-elements';
import { connect } from 'react-redux';

import { fetchPTA } from '../actions';

const LogoURL = "https://ballantynepta.weebly.com/uploads/8/8/2/6/88262164/dabears_6.png"

class PTAScreen extends Component {
  componentDidMount() {
    console.log(`inside componentDidMount`)
    this.props.fetchPTA();
  }

  renderCards = () => {
    if(this.props.pta) {
      return this.props.pta.map(member => {
        console.log(member)
        return (
          <View key={member.name}>
            <Card
              title={member.title}
            >
              <Image
                source={{ uri: member.imageURL}}
                style={{ width: 200, height: 200}}
                PlaceholderContent={<ActivityIndicator />}
              />
              <Text>{member.name}</Text>
              <Button
                title={member.email}
                onPress={(member) => Linking.openURL('mailto:'+ member.email)}
              />
              {member.title === "President" ? null : [
                <Text>Committees: </Text>,
                this.renderCommittees(member)
              ]}

            </Card>
          </View>
        );
      });
    }
  }

  renderCommittees = (member) => {
    if (member.committees.first === "") {
      return null;
    }
    return member.committees.map(committee => {
      return <Text key={committee}>{committee}</Text>
    });
  }

  render() {
    return (
      <ScrollView>
        {this.renderCards()}
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return { pta: state.pta }
}

export default connect(mapStateToProps, { fetchPTA })(PTAScreen);
