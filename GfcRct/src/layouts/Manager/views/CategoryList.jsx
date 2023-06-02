import React, { useEffect, useState } from "react";
import CategoryTable from "../components/CategoryTable";
import { Link, useNavigate } from "react-router-dom";
import ManagerValidationSkeleton from "./core/ManagerValidation_skeleton";
import { useStateContext } from "../../../contexts/ContextProvider";
import axiosClient from "../../../api/axios";

export default function CategoryList() {
    const { setCurrentUser, userToken } = useStateContext();
    const [validatingUser, setValidatingUser] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (!userToken) {
            navigate("../../");
            return;
        }

        axiosClient
            .get("/me")
            .then(({ data }) => {
                setCurrentUser(data);
                if (data.role !== "manager") {
                    navigate("../../");
                }
                setValidatingUser(false);
            })
            .catch(() => {
                setValidatingUser(false);
            });
    }, [navigate, setCurrentUser]);

    if (validatingUser) {
        return <ManagerValidationSkeleton />;
    }

    const handleSearch = () => {
        fetch(`/search?query=${query}`)
            .then((response) => response.json())
            .then((data) => setResults(data));
    };

    return (
        <div id="parent">
            <div className="flex justify-between p-1 bg-white">
                <div className="p-2">
                    <Link
                        to="../categoryregister"
                        className="text-black font-bold gap-1 rounded-3xl"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 hover:scale-110"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4.5v15m7.5-7.5h-15"
                            />
                        </svg>
                    </Link>
                </div>
                <div className="bg-gray w-100">
                    <button
                        onClick={handleSearch}
                        className="flex gap-2 m-1 bg-gray-200 rounded-xl"
                        type="submit"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 p-1 m-1 h-6 "
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>
                        <input
                            type="text"
                            className="border-none rounded-xl focus:outline-none bg-gray-200 py-1"
                            name="search"
                            placeholder="Search category"
                        />
                    </button>
                </div>
            </div>
            <CategoryTable />
        </div>
    );
}
