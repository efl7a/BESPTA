import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { Input, Button, CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';

class VolunteerScreen extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    committees: [],
  }

  componentDidMount() {
    let committees = [];
    this.props.pta.map(member => {
      member.committees.map(committee => {
        committees.push({name: committee, checked: false})
      })
    })
    committees.shift()
    this.setState({ committees })
  }

  changeCommittees = (index) => {
    console.log("change committees", index, this.state.committees[index])
    let committees = [ ...this.state.committees ];
    committees[index].checked = !this.state.committees[index].checked
    this.setState({ committees })
  }

  renderCheckboxes = (item, index) => {
    console.log("checkboxes", item.item, index)
    const { name, checked } = item.item;

    return (
      <CheckBox
        title={name}
        onPress={() => console.log(item.item, index)}
        checked={checked}
      />
    )
  }

  render() {
    return (
      <View style={{ flex: 1}}>
        <View>
          <Input
            label="First Name"
            value={this.state.firstName}
            onChange={(firstName) => this.setState( { firstName })}
          />
          <Input
            label="Last Name"
            value={this.state.lastName}
            onChange={(lastName) => this.setState( { lastName })}
          />
          <Input
            label="Email"
            value={this.state.email}
            onChange={(email) => this.setState( { email })}
          />
        </View>
        <View style={{ flex: 1 }}>
          <ScrollView>
            <FlatList
              data={this.state.committees}
              renderItem={(item, index) => this.renderCheckboxes(item, index)}
              keyExtractor={(item, index) => index.toString()}
            />
          </ScrollView>

        </View>
        <View>
          <Button
            title="Submit"
            onPress={() => console.log('The info being sent:', this.state)}
          />
        </View>
      </View>

    );
  }
}

const mapStateToProps = (state) => {
  return { pta: state.pta}
}

export default connect(mapStateToProps)(VolunteerScreen);
