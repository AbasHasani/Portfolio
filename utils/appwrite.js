import { Client, Account } from "appwrite";

// const client = new Client();
// client.setProject('6755f2d30011ff570652');

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6755f2d30011ff570652"); // Replace with your project ID

export const account = new Account(client);
export { ID } from "appwrite";
