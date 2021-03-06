import React, { Component } from "react";
import Icon from "@builderx/icons";
import Footer22 from "../symbols/footer22";
import { Center } from "@builderx/utils";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Image
} from "react-native";

export default class Love extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgsrc: ["", "", "", ""]
    };
  }
  componentWillMount() {
    fetch("https://www.veterans4success.org/api/v1/gyphy-images/bars").then(
      data => {
        data.json().then(url => {
          console.log(url);
          this.setState({
            imgsrc: [
              url,
              this.state.imgsrc[1],
              this.state.imgsrc[2],
              this.state.imgsrc[3]
            ]
          });
        });
      }
    );
    fetch("https://www.veterans4success.org/api/v1/gyphy-images/handsome").then(
      data => {
        data.json().then(url => {
          console.log(url);
          this.setState({
            imgsrc: [
              this.state.imgsrc[0],
              url,
              this.state.imgsrc[2],
              this.state.imgsrc[3]
            ]
          });
        });
      }
    );
    fetch("https://www.veterans4success.org/api/v1/gyphy-images/lovers").then(
      data => {
        data.json().then(url => {
          console.log(url);
          this.setState({
            imgsrc: [
              this.state.imgsrc[0],
              this.state.imgsrc[1],
              url,
              this.state.imgsrc[3]
            ]
          });
        });
      }
    );
    fetch("https://www.veterans4success.org/api/v1/gyphy-images/gifts").then(
      data => {
        data.json().then(url => {
          console.log(url);
          this.setState({
            imgsrc: [
              this.state.imgsrc[0],
              this.state.imgsrc[1],
              this.state.imgsrc[2],
              url
            ]
          });
        });
      }
    );
  }

  renderImage(i) {
    if (this.state.imgsrc[i]) {
      return (
        <Image
          style={styles.image}
          source={{
            uri: this.state.imgsrc[i]
          }}
          resizeMode="stretch"
        />
      );
    }
  }
  render() {
    return (
      <View style={styles.root}>
        <ScrollView
          style={styles.scrollArea5}
          contentContainerStyle={styles.ScrollView8}
        >
          <Text style={styles.text5} numberOfLines={2}>
            Love Life
          </Text>
          <Icon
            style={styles.icon}
            name="heart"
            type="MaterialCommunityIcons"
            onPress={() => {
              this.props.navigation.push("Login");
            }}
          />
          <View style={styles.rect19} horizontal={true}>
            <ScrollView
              style={styles.scrollArea3}
              horizontal={true}
              contentContainerStyle={styles.ScrollView7}
            >
              <TouchableOpacity style={styles.button5}>
                <View style={styles.rect21}>
                  <Text style={styles.text21} numberOfLines={2}>
                    A gift doesn't have to be material, as long as it is
                    thoughtful.
                  </Text>
                  <Text style={styles.text22} numberOfLines={2}>
                    Gifts, what to get them
                  </Text>
                  {this.renderImage(3)}
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button6}>
                <View style={styles.rect22}>
                  <Text style={styles.text23} numberOfLines={2}>
                    A healthy relationship is also about what you do together.
                    Find those meaningful experiences.
                  </Text>
                  <Text style={styles.text24} numberOfLines={2}>
                    Find the perfect event
                  </Text>
                  {this.renderImage(2)}
                </View>
              </TouchableOpacity>
            </ScrollView>
            <Text style={styles.text25}>Date Night</Text>
          </View>
          <View style={styles.rect23}>
            <ScrollView
              style={styles.scrollArea4}
              horizontal={true}
              contentContainerStyle={{
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <TouchableOpacity style={styles.button7}>
                <View style={styles.rect24}>
                  <Text style={styles.text26} numberOfLines={2}>
                    It's important to maximize your chances by exemplifying
                    yourself and learning what works.
                  </Text>
                  <Text style={styles.text27} numberOfLines={2}>
                    Get the Best Tips and Tricks
                  </Text>
                  {this.renderImage(1)}
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button8}>
                <View style={styles.rect25}>
                  <Text style={styles.text28} numberOfLines={2}>
                    Ever heard of "Right place, right time"? Maximize your
                    opportunity by learning about events.
                  </Text>
                  <Text style={styles.text29} numberOfLines={2}>
                    Good places to be
                  </Text>
                  {this.renderImage(0)}
                </View>
              </TouchableOpacity>
            </ScrollView>
            <Text style={styles.text30}>Still Looking</Text>
          </View>
        </ScrollView>
        <Footer22 style={styles.footer22} navigation={this.props.navigation} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  scrollArea5: {
    top: 50,
    left: 0,

    height: 684.82,
    position: "absolute",
    overflow: "hidden",
    right: 0
  },

  text5: {
    top: 29,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 32,
    left: "10.93%",
    width: 119
  },
  icon: {
    top: 36,
    left: 280,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(208,2,27,1)",
    fontSize: 40
  },
  footer22: {
    top: 740,
    left: 0,
    width: 375,
    height: 49,
    position: "absolute"
  },
  ScrollView1: {
    height: 989,
    width: 375
  },

  ScrollView2: {
    height: 470,
    width: 739
  },

  ScrollView3: {
    height: 899,
    width: 738
  },
  rect19: {
    top: 130,
    left: 0,

    height: 489,
    position: "absolute",
    flexDirection: "row",
    padding: 0,
    overflow: "visible",
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    right: 0
  },

  ScrollView4: {
    alignItems: "center",
    justifyContent: "flex-start",
    height: 479,
    width: 657
  },

  ScrollView5: {
    height: 1069,
    width: 670
  },
  ScrollView6: {
    width: 657,
    height: 479,
    alignItems: "center",
    justifyContent: "flex-start"
  },

  scrollArea3: {
    left: 0,
    width: 375,
    height: 479,
    position: "absolute",
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    padding: 0,
    overflow: "visible",
    top: "-2.04%"
  },
  button5: {
    width: 309,
    height: 400,
    elevation: 60,
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    margin: 13,
    borderRadius: 20,
    shadowColor: "rgba(206,206,206,1)",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    overflow: "visible"
  },
  image: {
    top: -2,
    left: 0,
    width: 310,
    height: 201,
    position: "absolute",
    borderRadius: 0
  },
  rect21: {
    top: 0,
    left: 0,
    width: 310,
    height: 399,
    position: "absolute",
    elevation: 60,
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    borderRadius: 20,
    shadowColor: "rgba(206,206,206,1)",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    overflow: "hidden"
  },
  text21: {
    top: "73.93%",
    left: 18,
    width: 220,
    height: 61,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: "left"
  },
  text22: {
    top: "53.88%",
    left: 18,
    width: 220,
    height: 70,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 32,
    lineHeight: 32,
    letterSpacing: 0,
    textAlign: "left"
  },
  button6: {
    width: 309,
    height: 400,
    elevation: 60,
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    margin: 13,
    borderRadius: 20,
    shadowColor: "rgba(206,206,206,1)",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    overflow: "visible"
  },
  rect22: {
    top: 0,
    left: 0,
    width: 310,
    height: 399,
    position: "absolute",
    elevation: 60,
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    borderRadius: 20,
    shadowColor: "rgba(206,206,206,1)",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    overflow: "hidden"
  },
  text23: {
    top: "73.93%",
    left: 18,
    width: 220,
    height: 61,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: "left"
  },
  text24: {
    top: "53.88%",
    left: 18,
    width: 220,
    height: 70,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 32,
    lineHeight: 32,
    letterSpacing: 0,
    textAlign: "left"
  },
  text25: {
    top: 0,
    left: 40,
    width: 90,
    height: 21,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(74,144,226,1)"
  },
  ScrollView7: {
    justifyContent: "center",
    alignItems: "center"
  },
  rect23: {
    top: 620,
    left: 0,
    right: 0,
    height: 491,
    position: "absolute",
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    padding: 0,
    overflow: "visible"
  },
  scrollArea4: {
    top: "-2.04%",
    left: 0,
    width: 375,
    height: 479,
    position: "absolute",
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    padding: 0,
    overflow: "visible"
  },
  button7: {
    width: 309,
    height: 400,
    elevation: 60,
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    margin: 13,
    borderRadius: 20,
    shadowColor: "rgba(206,206,206,1)",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    overflow: "visible"
  },
  rect24: {
    top: 0,
    left: 0,
    width: 310,
    height: 399,
    position: "absolute",
    elevation: 60,
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    borderRadius: 20,
    shadowColor: "rgba(206,206,206,1)",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    overflow: "hidden"
  },
  text26: {
    top: "73.93%",
    left: 18,
    width: 220,
    height: 61,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: "left"
  },
  text27: {
    top: "53.88%",
    left: 18,
    width: 220,
    height: 70,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 32,
    lineHeight: 32,
    letterSpacing: 0,
    textAlign: "left"
  },
  button8: {
    width: 309,
    height: 400,
    elevation: 60,
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    margin: 13,
    borderRadius: 20,
    shadowColor: "rgba(206,206,206,1)",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    overflow: "visible"
  },
  rect25: {
    top: 0,
    left: 0,
    width: 310,
    height: 399,
    position: "absolute",
    elevation: 60,
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    borderRadius: 20,
    shadowColor: "rgba(206,206,206,1)",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    overflow: "hidden"
  },
  text28: {
    top: "73.93%",
    left: 18,
    width: 220,
    height: 61,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: "left"
  },
  text29: {
    top: "53.88%",
    left: 18,
    width: 220,
    height: 70,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 32,
    lineHeight: 32,
    letterSpacing: 0,
    textAlign: "left"
  },
  text30: {
    top: 0,
    left: 40,
    width: 120,
    height: 20,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(74,144,226,1)"
  },
  ScrollView8: {
    height: 1112,
    width: 375
  }
});
