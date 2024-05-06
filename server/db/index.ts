import mysql from "mysql2/promise";

interface Option {
  query: string;
  value?: any[];
}

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: process.env.NUXT_TABLE_DB,
  password: process.env.NUXT_PASSWORD_DB,
});

export const sql = async ({ query, value }: Option) => {
  const [rows] = await pool.query(query, value);

  return rows;
};
