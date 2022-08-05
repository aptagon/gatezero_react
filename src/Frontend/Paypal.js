import React, { useRef, useEffect} from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function PaypalExpressBtn(props) {
  const paypal = useRef();
  const navigate = useNavigate();
  useEffect(() => {
    // console.log('aaa');
    // console.log(props.data);
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
            if(props.data == 'one') {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                      {
                        description: "1 User Plan",
                        amount: {
                          currency_code: "USD",
                          value: 149,
                        },
                      },
                    ],
                });
            }
            else if(props.data == 'ten'){
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                      {
                        description: "1 to 10 Users Plan",
                        amount: {
                          currency_code: "USD",
                          value: 349,
                        },
                      },
                    ],
                });
            }
            else if(props.data == 'unlimited'){
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                      {
                        description: "Unlimited Users Plan",
                        amount: {
                          currency_code: "USD",
                          value: 649,
                        },
                      },
                    ],
                });
            }
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
          navigate('/user');
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);

  }, []);

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}