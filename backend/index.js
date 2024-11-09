// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// // const require = require('require');
// const Razorpay = require("razorpay");

// const app = express();
// const PORT = 3000;

// app.use(bodyParser.json());
// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.send("Hello, World!");
// });

// app.post("/orders", async (req, res) => {
//   const razorpay = new Razorpay({
//     key_id: "rzp_test_VIETwGSQnb8sjv",
//     key_seceret: "S2RN0PwPrrzsyBR2OKWrmckg",
//   });

//   const options = {
//     amount: req.body.amount,
//     currency:req.body.currency,
//     receipt: "TravAIBook",
//     payment_capture: 1
//   };

//   try {
//     const response = await razorpay.orders.create(options);
//     res.json({
//       order_id: response.id,
//       currency: response.currency,
//       amount: response.amount,
//     });
//   } catch (error) {
//     return res.status(500).send("Internal Server Error");
//   }
// });

// app.get("/payment/:paymentID", async (req, res) => {
//   const { paymentId } = req.params;

//   const razorpay = new Razorpay({
//     key_id: "rzp_test_1O4y6Ztq4hJbW3",
//     key_seceret: "S2RN0PwPrrzsyBR2OKWrmckg",
//   });

//   try {
//     const payment = await razorpay.payments.fetch(paymentId);
//     if (!payment) {
//       return res.status(500).send("Error at razorpay loading");
//     }
//     req.json({
//       status: payment.id,
//       currency: payment.currency,
//       amount: payment.amount,
//       method: payment.method,
//     });
//   } catch (error) {
//     return res.status(500).send("Internal Server Error");
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Razorpay = require("razorpay");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/orders", async (req, res) => {
  const razorpay = new Razorpay({
    key_id: "rzp_test_VIETwGSQnb8sjv",
    key_secret: "S2RN0PwPrrzsyBR2OKWrmckg", // Corrected key name
  });

  const options = {
    amount: req.body.amount,
    currency: req.body.currency,
    receipt: "TravAIBook",
    payment_capture: 1,
  };

  try {
    const response = await razorpay.orders.create(options);
    res.json({
      order_id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
});

app.get("/payment/:paymentID", async (req, res) => {
  const { paymentID } = req.params; // Corrected to match the parameter name

  const razorpay = new Razorpay({
    key_id: "rzp_test_1O4y6Ztq4hJbW3",
    key_secret: "S2RN0PwPrrzsyBR2OKWrmckg", // Corrected key name
  });

  try {
    const payment = await razorpay.payments.fetch(paymentID);
    if (!payment) {
      return res.status(500).send("Error at razorpay loading");
    }
    res.json({ // Corrected to res.json
      status: payment.id,
      currency: payment.currency,
      amount: payment.amount,
      method: payment.method,
    });
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
