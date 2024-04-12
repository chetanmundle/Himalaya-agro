import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FaCartPlus } from "react-icons/fa";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import apple from "../assets/apple.png";

const FlotingCartBtn = () => {
  const [cartItem, setCartItem] = useState([
    // {
    //   id: 1,
    //   name: "Chetan",
    // },
  ]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <div className="floting-container">
        <Button
          data-quantity="0"
          class="btn-cart"
          ref={btnRef}
          // colorScheme="teal"
          onClick={onOpen}
        >
          <svg
            class="icon-cart"
            viewBox="0 0 24.38 30.52"
            height="30.52"
            width="24.38"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>icon-cart</title>
            <path
              transform="translate(-3.62 -0.85)"
              d="M28,27.3,26.24,7.51a.75.75,0,0,0-.76-.69h-3.7a6,6,0,0,0-12,0H6.13a.76.76,0,0,0-.76.69L3.62,27.3v.07a4.29,4.29,0,0,0,4.52,4H23.48a4.29,4.29,0,0,0,4.52-4ZM15.81,2.37a4.47,4.47,0,0,1,4.46,4.45H11.35a4.47,4.47,0,0,1,4.46-4.45Zm7.67,27.48H8.13a2.79,2.79,0,0,1-3-2.45L6.83,8.34h3V11a.76.76,0,0,0,1.52,0V8.34h8.92V11a.76.76,0,0,0,1.52,0V8.34h3L26.48,27.4a2.79,2.79,0,0,1-3,2.44Zm0,0"
            ></path>
          </svg>
          <span class="quantity"></span>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <span className="cart-basket">
                <FaCartPlus /> &nbsp;&nbsp; <span>Your Fresh Basket</span>
              </span>
            </DrawerHeader>
            <hr />

            <DrawerBody>
              {/* <Input placeholder="Type here..." /> */}
              {cartItem.length > 0 ? (
                <>
                  <Card border={"1px"}>
                    <CardBody>
                      <Flex gap={4}>
                        <Stack>
                          <Image
                            src={apple}
                            alt="chetan"
                            w={"60px"}
                            h={"60px"}
                          />
                        </Stack>
                        <Stack>
                          <Text
                            bg={"red"}
                            h={"50px"}
                            w="full"
                            overflowWrap={"break-word"}
                            overflow={"hidden"}
                          >
                            APPLE
                          </Text>
                          
                        </Stack>
                      </Flex>
                    </CardBody>
                  </Card>
                </>
              ) : (
                <>
                  <Text textAlign="center" mt={"100px"}>
                    Your cart is empty
                  </Text>

                  <Flex justify={"center"}>
                    <Button
                      mt={"10px"}
                      size="sm"
                      fontSize={{ base: "15px", md: "15px", lg: "15px" }}
                      height="40px"
                      border="2px"
                      borderColor="green.500"
                      className="btn-cart1"
                      _hover={{
                        backgroundColor: "#50b033",
                        borderColor: "black",
                      }}
                    >
                      RETURN TO SHOP
                    </Button>
                  </Flex>
                </>
              )}
            </DrawerBody>

            <DrawerFooter>
              {/* <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">Save</Button> */}
            </DrawerFooter>

            <Button
              size="md"
              fontSize={{ base: "20px", md: "20px", lg: "20px" }}
              height="48px"
              border="2px"
              borderColor="green.500"
              className="btn-cart1"
              _hover={{ backgroundColor: "#50b033", borderColor: "black" }}
            >
              CONTINUE
            </Button>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};

export default FlotingCartBtn;
