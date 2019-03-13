import React, { Component } from 'react';
import { Text, View } from 'react-native';

class TeacherScreen extends Component {

  renderGrades = () => {
    let grades = ["Kindergarten", "1st Grade", "2nd Grade", "3rd Grade", "4th Grade", "5th Grade", "Specials"]
    grades = grades.map((grade, index) => {
      return {
        title: grade,
        data: this.props.teachers.filter(teacher => teacher.grade == index)
      }
    })
    return (
      grades.map((grade, index) => {
        return (
          <View>
            <ListItem
            key={grade.title}
            title={grade.title}
            onPress={() => this.renderTeachers()}
            />
            <Divider />
          </View>
        )
      })
    )
  }

  renderTeachers = (teachers) => {
    console.log("teachers", teachers)
    return (
      teachers.map(teacher => {
        <View>
          <ListItem
          key={teacher.lastName}
          title={teacher.firstName + ' ' + teacher.lastName}
          onPress={() => Linking.openURL(`mailto:${teacher.email}`)}
          />
          <Divider />
        </View>
      })
    );
  }

  render() {
    return(
      <View>
        <Text>
          TeacherScreen
        </Text>
        <Text>
          TeacherScreen
        </Text>
        <Text>
          TeacherScreen
        </Text>
        <Text>
          TeacherScreen
        </Text>
        <Text>
          TeacherScreen
        </Text>
        <Text>
          TeacherScreen
        </Text>
      </View>
    )
  }
}

export default TeacherScreen;
