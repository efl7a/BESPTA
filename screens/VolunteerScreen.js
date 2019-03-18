import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView, Linking } from 'react-native';
import { Input, Button, CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';

import { BESButton } from '../components/common/BESButton';

class VolunteerScreen extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    committees: [],
  }

  componentDidMount() {
    let committees = [];
    this.props.pta.committees.map(committee => {
        committees.push({name: committee, checked: false})
      })
    committees.shift()
    this.setState({ committees })
  }

  changeCommittees = (index) => {
    let committees = [ ...this.state.committees ];
    committees[index].checked = !this.state.committees[index].checked
    this.setState({ committees })
  }

  renderCheckboxes = (item, index) => {
    const { name, checked } = item.item;

    return (
      <CheckBox
        title={name}
        onPress={() => this.changeCommittees(item.index)}
        checked={checked}
      />
    )
  }

  onSubmit = () => {
    const { firstName, lastName, email, committees, } = this.state;

    const URL = `mailto:${this.props.pta.board[0].email}`;
    const committeeChoices = committees.filter(committee => committee.checked).map(committee => committee.name).join('\n');
    const subject = "App testing";
    const body = `Name: ${firstName} ${lastName} \n
    email: ${email} \n
    Please sign me up for the following committees: \n
    ${committeeChoices}`
    Linking.openURL(`${URL}?subject=${subject}&body=${body}`);
    this.props.navigation.navigate('PTA')
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Input
            label="First Name"
            value={this.state.firstName}
            onChangeText={(firstName) => this.setState( { firstName })}
            autoCorrect={false}
          />
          <Input
            label="Last Name"
            value={this.state.lastName}
            onChangeText={(lastName) => this.setState( { lastName })}
            autoCorrect={false}
          />
          <Input
            label="Email"
            value={this.state.email}
            onChangeText={(email) => this.setState( { email })}
            autoCorrect={false}
          />
        </View>
        <View style={styles.container}>
          <ScrollView>
            <FlatList
              data={this.state.committees}
              renderItem={(item, index) => this.renderCheckboxes(item, index)}
              keyExtractor={(item, index) => item.name}
            />
          </ScrollView>

        </View>
        <View>
          <BESButton
            title="Submit"
            onPress={this.onSubmit}
          />
        </View>
      </View>

    );
  }
}

const styles = {
  container: {
    flex: 1,
    padding: 10
  }
};

const mapStateToProps = (state) => {
  return { pta: state.pta}
};

export default connect(mapStateToProps)(VolunteerScreen);
