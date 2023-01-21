import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { preview } from '../assets';
import { getRandomPrompt } from "../utils";
import { FormField, Loader } from '../components';

export default function CreatePost() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  const [generatingImg, setGeneratimgImg] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[25px]">Create</h1>
        <p className="mt-2 text-justify text-[#666e75] text-[16px] max-w-[500px]">Create imaginative and visually stunning images generated through Image Generator AI and share them with the community</p>
      </div>
    </section>
  )
}