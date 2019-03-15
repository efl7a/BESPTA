import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import { fetchTeachers } from '../actions';
import TeachersList from '../components/TeachersList';
import { BESCard } from '../components/common/BESCard';

class TeacherScreen extends Component {

  render() {
    return(
      <ScrollView>
        <BESCard
          title="BES Teachers"
        >
          <TeachersList data={this.props.teachers} />
        </BESCard>
      </ScrollView>
    )
  }
}

const mapStateToProps = ({ teachers }) => {
  return { teachers }
}

export default connect(mapStateToProps, { fetchTeachers })(TeacherScreen);
