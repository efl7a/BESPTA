import React, { Component } from 'react';
import { View, Text, ScrollView, Linking, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import { fetchTeachers } from '../actions';
import TeachersList from '../components/TeachersList';
import { BESCard, BESButton } from '../components/common';

class TeacherScreen extends Component {
  componentDidMount() {
    this.props.fetchTeachers()
  }

  renderTeachers = () => {
    return(
      <ScrollView>
        <BESCard
          title="BES Teachers"
        >
          <TeachersList data={this.props.teachers.teachers} />
        </BESCard>
        <View style={styles.buttonContainer} >
          <BESButton
            title="More Faculty and Staff"
            onPress={() => Linking.openURL("this.props.teachers.facultyPage")}
          />
        </View>
      </ScrollView>
    )
  }

  render() {
    return (
      <View>
        {this.props.teachers.teachers ? this.renderTeachers() : <ActivityIndicator />}
      </View>

    )
  }
}

const styles = {
  buttonContainer: {
    padding: 10,
    marginRight: 25,
    marginLeft: 25
  }
}

const mapStateToProps = ({ teachers }) => {
  return { teachers }
}

export default connect(mapStateToProps, { fetchTeachers })(TeacherScreen);
