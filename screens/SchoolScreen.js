import React, { Component } from 'react';
import {
  Text,
  View,
  Linking,
  SectionList,
  ScrollView,
  Platform
   } from 'react-native';
import { connect } from 'react-redux';
import { Button, Card, ListItem } from 'react-native-elements';

import { fetchSchool, fetchTeachers } from '../actions';

class SchoolScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Ballantyne Elementary',
      headerRight: (
        <Button
          title="Teachers"
          onPress={() => navigation.navigate('Teachers')}
          type="clear"
        />
      )
    }
  }

  componentDidMount = () => {
    this.props.fetchSchool();
    this.props.fetchTeachers();
  }

  renderAdmin = () => {
    return this.props.schoolData.admin.map(admin => {
      return (
        <View key={admin.title}>
          <Text>{admin.title}: </Text>
          <Text>{admin.name}</Text>
          <Button
            title="Email"
            onPress={() => Linking.openURL(`mailto:${admin.email}`)}
          />
        </View>
      )
    })
  }

  renderSchoolData = () => {
    return (
      <View><Text>Some sorta list</Text></View>
    );
  }

  renderTeachers = () => {
    return (
      <View><Text>Some sorta list</Text></View>
    );
  }

  renderApps = () => {
    console.log("renderapps", this.props.schoolData)
    let platform = Platform.OS
    return (
      this.props.schoolData.apps.map(app => {
        const URL = platform === 'ios' ? app.ios : app.android
        return (
          <ListItem
          key={app.name}
          title={app.name}
          onPress={() => Linking.openURL(URL)}
          />
        )
      })
    );
  }

  render() {
    return(
      <ScrollView>
        <Card
          title="School Administration"
        >
          {this.renderAdmin()}
        </Card>

        {this.renderSchoolData()}

        {this.renderTeachers()}
        <Card
          title="Helpful Apps"
        >
          {this.renderApps()}
        </Card>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state.school, state.teachers)
  return {
    schoolData: state.school,
    teachers: state.teachers
  }
}

export default connect(mapStateToProps, { fetchSchool, fetchTeachers })(SchoolScreen);
