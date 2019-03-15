// import React, { Component } from 'react';
// import { View, Linking, Text } from 'react-native';
// import { ListItem, Divider, Icon } from 'react-native-elements';
// import Accordion from 'react-native-collapsible/Accordion';
//
// let grades = [
//   { title: "Kindergarten", grade: 0, data: [] },
//   { title: "1st Grade", grade: 1, data: [] },
//   { title: "2nd Grade", grade: 2, data: [] },
//   { title: "3rd Grade", grade: 3, data: [] },
//   { title: "4th Grade", grade: 4, data: [] },
//   { title: "5th Grade", grade: 5, data: [] },
//   { title: "Specials", grade: "Specials", data: [] }
// ];
//
// export default class TeachersList extends Component {
//   state = {
//     activeSections: []
//   };
//
//   renderHeader = (section) => {
//     return (
//       <View>
//         <Text>{section.title}</Text>
//         <Divider />
//       </View>
//     )
//   }
//
//   renderContent = (section) => {
//
//     <ListItem
//     key="23124"
//     title="Macy"
//     onPress={() =>  console.log(section)}
//     />
//     // return section.data.map(item => {
//     //   return (
//     //     <View key={item.lastName}>
//     //       <ListItem
//     //       key={item.lastName}
//     //       title={item.firstName + item.lastName}
//     //       subtitle={item.subtitle ? item.subtitle : null}
//     //       onPress={() => Linking.openURL(item.email)}
//     //       />
//     //       <Divider />
//     //     </View>
//     //   )
//     // })
//   }
//
//   updateSections = activeSections => {
//     this.setState({ activeSections });
//   }
//
//   render() {
//     grades = grades.map((grade, index) => {
//       grade.data = this.props.data.filter(teacher => teacher.grade == index)
//     });
//
//     return (
//       <View>
//         <Accordion
//           sections={grades}
//           activeSections={this.state.activeSections}
//           renderHeader={this.renderHeader}
//           renderContent={this.renderContent}
//           renderSectionTitle={this.renderContent}
//           onChange={this.updateSections}
//         />
//       </View>
//
//     );
//   }
// }
