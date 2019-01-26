import React, { Component } from "react";
import { Card, Image, Box, Text, Heading, Flex } from "rebass";
import rover from "./marsRover.jpg";
import "styled-components/macro";
import { Spring, Transition } from "react-spring";
class App extends Component {
  render() {
    const mars = "Mars Rover!!!!".split("");
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {props => (
          <Flex
            width={[250, 450, 650, 850]}
            css="transition: all 150ms ease-in"
            style={props}
          >
            console.log(mars)
            <Card
              p={1}
              borderRadius={2}
              boxShadow="0 0 16px rgba(0, 0, 0, .25)"
            >
              <Image src={rover} />
              <Box px={2}>
                <Heading as="h3" fontSize={["2em", "3.5em", "5em", "6em"]}>
                  <Transition
                    items={mars}
                    from={{ transform: "translate3d(0,-40px,0)" }}
                    enter={{ transform: "translate3d(0,0px,0)" }}
                    leave={{ transform: "translate3d(0,-40px,0)" }}
                  >
                    {item => props => (
                      <Text style={props}>
                        {console.log(item, props)} {item}
                      </Text>
                    )}
                  </Transition>
                </Heading>
                <Text fontSize={[0, 1, 2]}>Cool picture of a Mars Rover!</Text>
              </Box>
            </Card>
          </Flex>
        )}
      </Spring>
    );
  }
}

export default App;
