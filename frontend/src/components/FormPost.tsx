'use client'
import React, { FunctionComponent } from "react";
import {SubmitHandler, useForm} from 'react-hook-form'
import {FormInputPost} from '@/types'
interface FormPostProps {
    submit: SubmitHandler<FormInputPost>

}
const FormPost:FunctionComponent<FormPostProps> = ({submit}) => {
    const {register, handleSubmit} = useForm<FormInputPost>()
  return (
    <div>
      <form className='flex flex-col items-center justify-center gap-5 mt-10' onSubmit={handleSubmit(submit)}>
        <input
          type="text"
          
          {...register("title")}
          placeholder="post title..."
          className="input input-bordered input-info w-full max-w-lg"
        />
        <textarea
          className="textarea textarea-info w-full max-w-lg"
          {...register("content")}
          placeholder="post content..."
        ></textarea>
        <select {...register("tag")} className="select select-info w-full max-w-lg">
          <option disabled selected>
            Select tags
          </option>
          <option>English</option>
          <option>Japanese</option>
          <option>Italian</option>
        </select>
        <button className='btn btn-primary w-full max-w-lg'>Create</button>
      </form>
    </div>
  );
};

export default FormPost;
