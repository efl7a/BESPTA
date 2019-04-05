import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { connect } from 'react-redux';
import { Icon, Button } from 'react-native-elements';

import { fetchEvents } from '../actions';
import { BESButton } from '../components/common/BESButton';

class CalendarScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "BES Events",
      headerRight: (
        <Button
          title="More Info"
          titleStyle={styles.topBarButtonTitle}
          onPress={() => navigation.navigate('MoreInfo')}
          type="clear"
        />
      )
    }
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  loadEvents = (day) =>  {

  }

  renderEvent = (event) => {
    const link = event.link ? true : false;
    return (
      <View style={[styles.event, {height: event.height}]}>
        <View>

          <View>
            <Text style={styles.eventText}>
              {event.name}
            </Text>
          </View>
          <View>
            <Text style={styles.eventText}>
              {event.time}
            </Text>
          </View>

        </View>
        <View style={{ alignItem: 'right', justifyContent: 'center'}}>
          {link ? <BESButton icon={{ name: "chevron-right", type: "evilicon", size: 45 }} title="More Information" onPress={() => Linking.openURL(event.link)} /> : null}
        </View>
      </View>

      //
      // {/* <TouchableOpacity
      //   style={[styles.event, {height: event.height}]}
      //   onPress={() => link ? Linking.openURL(event.link) : null}
      // >
      //   <View style={styles.eventContainer}>
      //     <View>
      //       <Text style={styles.eventText}>
      //         {event.name}
      //       </Text>
      //       <Text style={styles.eventText}>
      //         {event.time}
      //       </Text>
      //     </View>
      //     <View style={{ alignItem: 'right', justifyContent: 'center'}}>
      //       {link ? <Icon name="chevron-right" type="evilicon" size={35} /> : null}
      //     </View>
      //   </View>
      // </TouchableOpacity> */}


    );
  }

  renderEmptyDate = () => {
    return (
      <View style={styles.emptyDateContainer}><Text style={styles.eventText}>We do not have any school events on this date. Dates with events are indicated by a small dot on the calendar. See more dates by pressing the ^ above.</Text></View>
    );
  }

  rowHasChanged = (r1, r2) => {
    return r1.name !== r2.name;
  }

  //   timeToString = (time) => {
  //   const date = new Date(time);
  //   return date.toISOString().split('T')[0];
  // }

  renderKnob = () => {
    return <Icon name="chevron-up" type="evilicon" size={50} />
  }

  render() {
    return (
      <View style={styles.container}>
        <Agenda
          items={this.props.events}
          // loadItemsForMonth={this.loadEvents}
          renderItem={this.renderEvent}
          renderEmptyDate={this.renderEmptyDate}
          rowHasChanged={this.rowHasChanged}
          renderKnob={this.renderKnob}
          theme={{
            agendaKnobColor: "#09337B",
            selectedDayBackgroundColor: "#09337B",
            dotColor: "#09337B",
            todayTextColor: "#09337B",
            monthTextColor: "#09337B"
          }}
          // renderDay={(day, item) => (<Text>{day ? day.day : day}</Text>)}
        />
      </View>
    );
  }
}



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 35
    },
    event: {
      backgroundColor: 'white',
      flex: 1,
      borderRadius: 5,
      padding: 10,
      marginRight: 10,
      marginTop: 17
    },
    eventText: {
      fontSize: 20,
      color: "#09337B"
    },
    emptyDate: {
      height: 15,
      flex: 1,
      paddingTop: 30
    },
    eventContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    topBarButtonTitle: {
      color: "#09337B",
      fontSize: 20,
      fontWeight: 'bold'
    },
    emptyDateContainer: {
      margin: 10,
      padding: 10,
      backgroundColor: "#ffffff"
    }
  });

  const mapStateToProps = (state) => {
    return (
        { events: state.events }
    );
  };

export default connect(mapStateToProps, { fetchEvents })(CalendarScreen);
