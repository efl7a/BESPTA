import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Agenda } from 'react-native-calendars';




class CalendarScreen extends Component {
  constructor(props) {
      super(props);
      this.state = {
        items: {
          '2019-03-05': [],
          '2019-03-06': [],
          '2019-03-07': [{name: 'Father/Daughter Dance', time: '6:30 - 8:00PM', height: 100}, {name: 'event', time: '9:30', height: 100}],
          '2019-03-20': [{name: 'Meeting', time: '9:30-11:30'}],
          '2019-04-06': [{name: 'another event'}],
          '2019-05-15': [{name: 'EOGs', time: 'forever'}]
        }
      };
    }

    render() {
      return (
        <View style={{ marginTop: 15, flex: 1 }}>
        <Agenda
          items={this.state.items}
          loadItemsForMonth={this.loadItems.bind(this)}
          renderItem={this.renderItem.bind(this)}
          renderEmptyDate={this.renderEmptyDate.bind(this)}
          rowHasChanged={this.rowHasChanged.bind(this)}
          // markingType={'period'}
          // markedDates={{
          //    '2017-05-08': {textColor: '#666'},
          //    '2017-05-09': {textColor: '#666'},
          //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
          //    '2017-05-21': {startingDay: true, color: 'blue'},
          //    '2017-05-22': {endingDay: true, color: 'gray'},
          //    '2017-05-24': {startingDay: true, color: 'gray'},
          //    '2017-05-25': {color: 'gray'},
          //    '2017-05-26': {endingDay: true, color: 'gray'}}}
           // monthFormat={'yyyy'}
           // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
          //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
        />
        </View>
      );
    }

    loadItems(day) {

    }

    renderItem(item) {
      return (
        <View style={[styles.item, {height: item.height}]}>
          <Text style={styles.itemText}>
            {item.name}
          </Text>
          <Text style={styles.itemText}>
            {item.time}
          </Text>
        </View>
      );
    }

    renderEmptyDate() {
      return (
        <View style={styles.emptyDate}></View>
      );
    }

    rowHasChanged(r1, r2) {
      return r1.name !== r2.name;
    }

    timeToString(time) {
      const date = new Date(time);
      return date.toISOString().split('T')[0];
    }
  }

  const styles = StyleSheet.create({
    item: {
      backgroundColor: 'white',
      flex: 1,
      borderRadius: 5,
      padding: 10,
      marginRight: 10,
      marginTop: 17
    },
    itemText: {
      fontSize: 20
    },
    emptyDate: {
      height: 15,
      flex: 1,
      paddingTop: 30
    }
  });

export default CalendarScreen;
