'use client';
import React from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from './ui/textarea';
import { ArrowRight } from 'lucide-react';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const formSchema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().email(),
    message: z.string().max(1000),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.success('Message sent successfully');
    form.reset();
  }

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      {' '}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-w-screen-sm mx-auto flex flex-col gap-4"
        >
          <div className="flex items-center gap-4 ">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-1/2">
                  <FormControl>
                    <Input placeholder="Full Name" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-1/2">
                  <FormControl>
                    <Input placeholder="Email Address" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="col-span-2 row-span-2 ">
                <FormControl>
                  <Textarea
                    placeholder="Your message here"
                    className="h-[215px] border-gray-300 "
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="h-14 rounded-full w-full md:w-fit px-12 mx-auto hover:bg-tangello-500"
          >
            Submit <ArrowRight />
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
