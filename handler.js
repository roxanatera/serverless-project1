const { v4: uuidv4 } = require('uuid');


const { SQSClient, SendMessageCommand } = require ("@aws-sdk/client-sqs");

// Create an SQS client
const sqsClient = new SQSClient({ region: process.env.REGION });

exports.newOrder = async (event) => {
    const orderId = uuidv4();
    console.log(orderId);

    let orderDetails;
    try {
      orderDetails = JSON.parse(event.body); 
    } catch (error) {
      console.error("Error parsing order details:", error);
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Invalid JSON format in order details" }),
      };
    }
  
    console.log(orderDetails)
  
    const order = {orderId, ...orderDetails}
    const PENDING_ORDERS_QUEUE_URL = process.env.PENDING_ORDERS_QUEUE;
    await sendMessageToSQS(order, PENDING_ORDERS_QUEUE_URL);
  
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: order  
      }),
    };
}

//Metodo get

exports.getOrder = async (event) => {
  const orderId = event.pathParameters.orderId;

  if (!orderId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Falta el parámetro orderId" }),
    };
  }

  const orderDetails = {
    orderId,
    pedidoId: "001",
    tipoBurger: "Doble Carne",
    toppings: ["queso cheddar", "tocino"],
    acompañamiento: "papas fritas",
    estado: "En preparación"
  };

  return {
    statusCode: 200,
    body: JSON.stringify(orderDetails),  
  };
};

exports.preOrder = async (event) => {
  console.log("Evento recibido desde SQS:", event);

  return;
};

exports.sendOrder = async (event) => {
  console.log(event);

  const order = {
    orderId: event.orderId,
    burguer: event.burguer,
    customerId: event.burguer
  }

  const ORDERS_TO_SEND_QUEUE_URL = process.env.ORDERS_TO_SEND_QUEUE

  await sendMessageToSQS(order, ORDERS_TO_SEND_QUEUE_URL);

  return;
}

async function sendMessageToSQS(message, queueURL) {

  const params = {
    QueueUrl: process.env.PENDING_ORDERS_QUEUE,
    MessageBody: JSON.stringify(message)
  };

  console.log(params);

  try {
    const command = new SendMessageCommand(params);
    const data = await sqsClient.send(command);
    console.log("Message sent successfully:", data.MessageId);
    return data;
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
}