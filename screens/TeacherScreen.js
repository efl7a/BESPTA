import React, { Component } from 'react';
import { View, Text, ScrollView, Linking } from 'react-native';
import { connect } from 'react-redux';

import { fetchTeachers } from '../actions';
import TeachersList from '../components/TeachersList';
import { BESCard, BESButton } from '../components/common';

class TeacherScreen extends Component {

  render() {
    return(
      <ScrollView>
        <BESCard
          title="BES Teachers"
        >
          <TeachersList data={this.props.teachers} />
        </BESCard>
        <View style={styles.buttonContainer} >
          <BESButton
            title="More Faculty and Staff"
            onPress={() => Linking.openURL("http://schools.cms.k12.nc.us/ballantyneES/Pages/FacultyAndStaff.aspx")}
          />
        </View>
      </ScrollView>
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
