import React, { Component } from 'react';
import { View, Linking, Text } from 'react-native';
import { ListItem, Divider, Icon } from 'react-native-elements';

let grades = [
  { title: "Kindergarten", grade: 0, data: [] },
  { title: "1st Grade", grade: 1, data: [] },
  { title: "2nd Grade", grade: 2, data: [] },
  { title: "3rd Grade", grade: 3, data: [] },
  { title: "4th Grade", grade: 4, data: [] },
  { title: "5th Grade", grade: 5, data: [] },
  { title: "Specials", grade: "Specials", data: [] }
];

export default class TeachersList extends Component {
  state = {
    activeGrades: [
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false }
    ]
  };

  toggleActiveGrades = (index) => {
    console.log("begin toggle", this.state.activeGrades[index].expanded)
    let active = [ ...this.state.activeGrades ]
    active[index].expanded = !active[index].expanded
    this.setState({ activeGrades: active })
    console.log("is toggled", this.state.activeGrades[index].expanded)
  }

  renderGrades = () => {
    grades = grades.map((grade, index) => {
      data = this.props.data.filter(teacher => teacher.grade.toString() === grade.grade.toString())
      return (
        { ...grade, data }
      )
    });
    return grades.map((item, index) => {
      return (
        <View key={item.title}>
          <ListItem
            key={item.title}
            title={item.title}
            onPress={() => this.toggleActiveGrades(index)}
          />
          <View style={{ marginRight: 20 }}>
            {this.state.activeGrades[index].expanded ? this.renderTeachers(item.data) : null}
          </View>

          <Divider />
      </View>
      )
    })
  }

renderTeachers = (data) => {
  return data.map(item => {
    let name = `${item.firstName} ${item.lastName}`
    return (
      <View key={item.lastName} style={styles.expandedContainer} >
        <Divider />
        <ListItem
          key={name}
          title={name}
          onPress={() => Linking.openURL(`mailto:${item.email}`)}
          rightIcon={{ name: "email", color: "#1b2668" }}
        />

      </View>
    );
  });
}

  render() {

    return (
      <View>
        {this.renderGrades()}
      </View>

    );
  }
}

const styles = {
  expandedContainer: {
    marginLeft: 30
  }
}
