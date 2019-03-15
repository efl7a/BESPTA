import React, { Component } from 'react';
import {
  Text,
  View,
  Linking,
  SectionList,
  ScrollView,
  Platform,
  ActivityIndicator,
  Image
   } from 'react-native';
import { connect } from 'react-redux';
import {
  ListItem,
  Divider,
  Button
} from 'react-native-elements';

import { fetchSchool, fetchTeachers } from '../actions';
import { AdminList } from '../components/AdminList';
import { LinksList } from '../components/LinksList';
import { AppsList } from '../components/AppsList';
import TeachersList from '../components/TeachersList';
import { BESCard, BESButton } from '../components/common';

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
    let platform = Platform.OS
    const { logo, admin, links, apps } = this.props.schoolData;
    return (
      <ScrollView>

        <Image
          source={{ uri: this.props.schoolData.logo.link}}
          style={styles.imageStyle}
        />

        <BESCard
          title="School Administration"
        >
          <AdminList data={this.props.schoolData.admin} />

        </BESCard>

        <BESCard
          title="Helpful Links"
        >
          <LinksList data={this.props.schoolData.links} />
        </BESCard>

        <BESCard
          title="Helpful Apps"
        >
          <AppsList data={this.props.schoolData.apps} platform={platform} />
        </BESCard>

        <View style={styles.buttonContainer}>
          <BESButton
            title="Further Information"
            onPress={() => Linking.openURL(this.props.schoolData.links.find(link => link.name === "BES Website").link)}
          />
        </View>

        <View style={styles.buttonContainer}>
          <BESButton
            title="BES on Facebook"
            onPress={() => Linking.openURL('https://www.facebook.com/BEARTEAM2018/')}
            icon={{ name: "facebook", type: "entypo" }}
          />
        </View>

      </ScrollView>
    )
  }


  render() {
    return (
      <View>
        {this.props.schoolData.admin ? this.renderSchoolScreen() : <ActivityIndicator /> }
      </View>
    )
  }
}

const styles = {
  imageStyle: {
    width: 100,
    height: 92,
    alignSelf: 'center',
    marginTop: 10
  },
  buttonContainer: {
    padding: 10,
    marginRight: 25,
    marginLeft: 25
  }
}

const mapStateToProps = (state) => {
  return {
    schoolData: state.school,
    teachers: state.teachers
  }
}

export default connect(mapStateToProps, { fetchSchool, fetchTeachers })(SchoolScreen);
