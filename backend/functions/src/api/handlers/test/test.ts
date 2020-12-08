import * as FirebaseAdmin from "firebase-admin";

export default async (
  req: {
    body: any;
    firebaseAdmin: FirebaseAdmin.app.App;
  },
  res: any
) => {
  console.log(req);
  return res.status(200).json({
    status: "success",
    description:
      "would i rather be loved or feared? easy. both. i want people to be afraid of how much they love me ~ Micheal Scott",
  });
};
