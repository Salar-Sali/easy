import { send } from "emailjs-com";

export const sendEmail = ({
  name,
  price,
  items,
}: {
  name: string;
  price: string;
  items: string[];
}) => {
  send(
    "service_k9fuqeb",
    "template_aem68dk",
    {
      to_name: "Recipient Name",
      from_name: "Your Name",
      message: `Client name ${name},
      Total price: ${price},
      services: ${items.join(" | ")}`,
    },
    "2ZDHJn9VU9DJXsCWJ"
  );
};
