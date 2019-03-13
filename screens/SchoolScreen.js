import React, { Component } from 'react';
import {
  Text,
  View,
  Linking,
  SectionList,
  ScrollView,
  Platform,
  ActivityIndicator
   } from 'react-native';
import { connect } from 'react-redux';
import { Button, Card, ListItem, Divider } from 'react-native-elements';

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

  renderSchoolScreen = () => {
    return (
      <ScrollView>
        <Card
          title="School Administration"
        >
          {this.renderAdmin()}
        </Card>
        <Card
          title="Helpful Links"
        >
          {this.renderLinks()}
        </Card>

        <Card
          title="Helpful Apps"
        >
          {this.renderApps()}
        </Card>
        <Card
          title="Teachers"
        >
          {this.renderTeachers()}
        </Card>
      </ScrollView>
    )
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

  renderLinks = () => {
    return (
      this.props.schoolData.links.map(link => {
        return (
          <View>
            <ListItem
            key={link.name}
            title={link.name}
            onPress={() => Linking.openURL(link.link)}
            />
            <Divider />
          </View>
        )
      })
    );
  }

  renderApps = () => {
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

  renderTeachers = () => {
    let grades = ["Kindergarten", "1st Grade", "2nd Grade", "3rd Grade", "4th Grade", "5th Grade"]
    grades = grades.map((grade, index) => {
      return {
        title: grade,
        data: this.props.teachers.filter(teacher => teacher.grade == index)
      }
    })
    return (
      <SectionList
        renderItem={({item, index, section}) => this.renderTeacher({item})}
        renderSectionHeader={({section: {title}}) => <Text>{title}</Text>}
        sections={grades}
        keyExtractor={(item, index) => item + index}
      />
    )
  }

  renderTeacher = ({ item }) => {
    return (
      <View>
        <Text>{item.firstName}</Text>
        <Text>{item.lastName}</Text>
        <Button
          title="Email"
          onPress={() => console.log(item.email)}
        />
      </View>
    );
  }

  render() {
    return (
      <View>
        {this.props.schoolData.admin ? this.renderSchoolScreen() : <ActivityIndicator /> }
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    schoolData: state.school,
    teachers: state.teachers
  }
}

export default connect(mapStateToProps, { fetchSchool, fetchTeachers })(SchoolScreen);
