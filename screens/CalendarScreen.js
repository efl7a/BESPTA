import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { connect } from 'react-redux';

import { fetchEvents } from '../actions';

class CalendarScreen extends Component {
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
           // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
          //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
        />
      </View>
    );
  }

    loadEvents = (day) =>  {
      // setTimeout(() => {
      // for (let i = -15; i < 85; i++) {
      //   const time = day.timestamp + i * 24 * 60 * 60 * 1000;
      //   const strTime = this.timeToString(time);
      //   if (!this.props.pta[strTime]) {
      //     this.props.pta[strTime] = [];
      //     const numItems = Math.floor(Math.random() * 5);
      //     for (let j = 0; j < numItems; j++) {
      //       this.props.pta[strTime].push({
      //         name: 'Item for ' + strTime,
      //         height: Math.max(50, Math.floor(Math.random() * 150))
      //       });
      //     }
      //   }
    }

    renderEvent = (event) => {
      return (
        <View style={[styles.event, {height: event.height}]}>
          <Text style={styles.eventText}>
            {event.name}
          </Text>
          <Text style={styles.eventText}>
            {event.time}
          </Text>
        </View>
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
    }
  });

  const mapStateToProps = (state) => {
    return (
        { events: state.events }
    );
  };

export default connect(mapStateToProps, { fetchEvents })(CalendarScreen);
