import React, { useState, useEffect } from "react";
import axios from "axios";

import PassengersPage from "../../components/PassengersPage/PassengersPage";
import Loading from "../../components/Loading/Loading";

const Passengers = () => {
  const [card, setCard] = useState([]);  // State to store passenger data
  const [page, setPage] = useState(0);  // State to track the current page for infinite scroll
  const [loading, setLoading] = useState(true);  // State to manage loading status

  // Function to fetch passenger data
  const getpassengersdata = async () => {
    try {
      const res = await axios.get(
        `https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`
      );
      const data = res.data.data;
      
      // Append new data to existing data in state
      setCard((prev) => [...prev, ...data]);
      setLoading(false);  // Set loading to false after data is fetched
    } catch (error) {
      console.error("Error fetching passenger data:", error);
      setLoading(false);  // Stop loading if there's an error
    }
  };

  useEffect(() => {
    getpassengersdata();  // Fetch data when page changes
  }, [page]);

  // Infinite scroll handler
  const handelInfiniteScroll = async () => {
    try {
      // Check if the user has scrolled to the bottom of the page
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 1);  // Increment page to load more data
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Add event listener for scroll and remove on cleanup
  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">  {/* Wrapper container with background and padding */}
      {/* Passengers Page Component */}
      <div className="mb-4">
        <PassengersPage Passengersinfo={card} />
      </div>

      {/* Loading Spinner */}
      {loading && (
        <div className="flex justify-center items-center">
          <Loading />
        </div>
      )}

      {/* Placeholder if no data is available */}
      {!loading && card.length === 0 && (
        <div className="text-center text-gray-500 mt-10">
          <p>No passengers found.</p>
        </div>
      )}
    </div>
  );
};

export default Passengers;
