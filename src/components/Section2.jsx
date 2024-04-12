import React from "react";
import readymadeBasket  from  "../assets/readymadebasket.png";
import readymadefruit from "../assets/readymadefruit.jpg";
import fruitbox from "../assets/fruitBox.jpg";
import {
  Image,
  Stack,
  Heading,
  Text,
  ButtonGroup,
  Button,
  Divider,
  Card,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";

const Section2 = () => {
  return (
    <>
      <section className="Section2">
        <div className="Section2-Qaulity sec-chaild">
          <h2 className="Section2-Qaulity-heading">
            Top Quality Fruit And Veg Home Delivery Service For Gold Coast,
            Tweed And Coastal To Ballina.
          </h2>
        </div>
        {/* <div className="Section2-cards sec-chaild">
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Living room Sofa</Heading>
                <Text>
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </div> */}
        <div>
          <article class="card">
            <div class="card-img">
              <div class="card-imgs pv delete"><img src={fruitbox} className ="fruitbox" /></div>
            </div>

            <div class="project-info">
              <div class="flex">
                <div class="project-title">Title card</div>
                {/* <span class="tag">type</span> */}
              </div>
              <span class="lighter">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repudiandae voluptas ullam aut incidunt minima.
              </span>
            </div>
          </article>
        </div>

        <div>
          <article class="card">
            <div class="card-img">
              <div class="card-imgs pv delete"><img src={readymadefruit} className ="fruitbox" /></div>
            </div>

            <div class="project-info">
              <div class="flex">
                <div class="project-title">Title card</div>
                {/* <span class="tag">type</span> */}
              </div>
              <span class="lighter">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repudiandae voluptas ullam aut incidunt minima.
              </span>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Section2;



