import React from "react";
import readymadeBasket from "../assets/readymadebasket.png";
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

        <div className="basket-cards" >
          <div>
            <article class="card">
              <div class="card-img">
                <div class="card-imgs pv delete">
                  <img src={fruitbox} className="fruitbox" />
                </div>
              </div>

              <div class="project-info">
                <div class="flex">
                  <div class="project-title">Ready Made Boxes</div>
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
                <div class="card-imgs pv delete">
                  <img src={readymadefruit} className="fruitbox" />
                </div>
              </div>

              <div class="project-info">
                <div class="flex">
                  <div class="project-title">Create Your Own Boxes</div>
                  {/* <span class="tag">type</span> */}
                </div>
                <span class="lighter">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repudiandae voluptas ullam aut incidunt minima.
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section2;
