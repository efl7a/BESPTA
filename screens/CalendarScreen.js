import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';

import { fetchEvents } from '../actions';

class CalendarScreen extends Component {
  static navigationOptions = {
    title: 'Calendar',
    tabBarIcon: ({tintColor}) => {
      return <Icon
        type="font-awesome"
        name="calendar"
        size={30}
        color={tintColor}
      />
    },
    tabBarOptions: {
      activeTintColor: '#09337B'
    }
  }
  componentDidMount() {
    this.props.fetchEvents();
  }
  render() {
    return (
      <View style={styles.container}>
        <Agenda
          items={this.props.events}
          // loadItemsForMonth={this.loadEvents}
          renderItem={this.renderEvent}
          renderEmptyData={this.renderEmptyData}
          rowHasChanged={this.rowHasChanged}
          theme={{
            agendaKnobColor: "#09337B",
            selectedDayBackgroundColor: "#09337B",
            dotColor: "#09337B",
            todayTextColor: "#09337B",
            monthTextColor: "#09337B"
          }}
          //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
        />
      </View>
    );
  }

    loadEvents = (day) =>  {

    }

    renderEvent = (event) => {
      const link = event.link ? true : false;
      return (
        <TouchableOpacity
          style={[styles.event, {height: event.height}]}
          onPress={() => link ? Linking.openURL(event.link) : null}
        >
          <View style={styles.eventContainer}>
            <View>
              <Text style={styles.eventText}>
                {event.name}
              </Text>
              <Text style={styles.eventText}>
                {event.time}
              </Text>
            </View>
            <View style={{ alignItem: 'right', justifyContent: 'center'}}>
              {link ? <Icon name="chevron-right" type="evilicon" size={35} /> : null}
            </View>
          </View>



        </TouchableOpacity>
      );
    }

    renderEmptyData = () => {
      return (
        <View style={styles.emptyDate}></View>
      );
    }

    rowHasChanged = (r1, r2) => {
      return r1.name !== r2.name;
    }

  //   timeToString = (time) => {
  //   const date = new Date(time);
  //   return date.toISOString().split('T')[0];
  // }

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
      fontSize: 20
    },
    emptyDate: {
      height: 15,
      flex: 1,
      paddingTop: 30
    },
    eventContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    }

  });

  const mapStateToProps = (state) => {
    return (
        { events: state.events }
    );
  };

export default connect(mapStateToProps, { fetchEvents })(CalendarScreen);
