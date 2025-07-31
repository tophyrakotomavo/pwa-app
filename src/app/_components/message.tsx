"use client";

import { useQuery } from "@tanstack/react-query";

export const Message = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const response = await fetch("/api/routers");
      return response.json();
    },
  });

  return <div>{isLoading ? "Loading..." : data?.message}</div>;
};
