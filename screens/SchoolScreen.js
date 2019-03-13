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
  Button,
  Card,
  ListItem,
  Divider
} from 'react-native-elements';

import { fetchSchool, fetchTeachers } from '../actions';
import { AdminList } from '../components/AdminList';
import { LinksList } from '../components/LinksList';
import { AppsList } from '../components/AppsList';

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

        <Card
          title="School Administration"
        >
          <AdminList data={this.props.schoolData.admin} />

        </Card>

        <Card
          title="Helpful Links"
        >
          <LinksList data={this.props.schoolData.links} />
        </Card>

        <Card
          title="Helpful Apps"
        >
          <AppsList data={this.props.schoolData.apps} platform={platform} />
        </Card>

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
  }
}

const mapStateToProps = (state) => {
  return {
    schoolData: state.school,
    teachers: state.teachers
  }
}

export default connect(mapStateToProps, { fetchSchool, fetchTeachers })(SchoolScreen);
