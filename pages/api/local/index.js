import db from "../../../models";

export default async (req, res) => {


  const s = await db.local.findAll({});

  
  return res.status(200).send(s);
};
