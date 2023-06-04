//GET
import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (req, res) => {
  try {
    await connectToDB();
    const prompts = await Prompt.find({}).populate("creator");
    return new Response(JSON.stringify(prompts), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to fetch all prompts", {
      status: 500,
    });
  }
};

//PATCH
export const PATCH = async (req, res) => {
  try {
    await connectToDB();
    const newPrompt = null;
  } catch (error) {}
  return;
};
//DELETE
