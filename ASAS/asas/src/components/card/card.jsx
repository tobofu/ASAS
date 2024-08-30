import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export default function CardItem({profName, rating, by, review}) {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{profName}</p>
        <small className="text-default-500">{rating}</small>
        <h4 className="font-bold text-large">{by}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2 px-3">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          width={300}
        />
        <p className="text-large">{review}</p>
      </CardBody>
    </Card>
  );
}