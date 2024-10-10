import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import AccountabilityHeatmap from "../../../components/accountability/AccountabilityHeatmap";
import { Button } from "../../../components/ui/Button";
import Dropdown from "../../../components/ui/Dropdown";
import LoadingComponent from "../../../components/ui/loader";
import { GET_ACCOUNTABILITY_TASKS_BY_USER } from "../../../graphql/studentPortal/accountability/fetchAccountabilityTasks";
import { INSERT_ACCOUNTABILITY_MUTATION } from "../../../graphql/studentPortal/accountability/insertAccountabilityTask";
import { useAuth } from "../../../lib/authContext";

// Accountability Menu Data
const accountabilityMenuData: Record<string, string[]> = {
  "Building Software": [
    "Architectural/System Design",
    "Bug Fixing",
    "Coding",
    "Continuous Integration and Deployment (CI/CD)",
    "Feature Enhancements",
    "Requirements Analysis",
    "Testing",
    "UI/UX Design",
  ],
  "Building Connections": [
    "Job Applications",
    "Resume Building",
    "Mentorship",
    "Networking",
    "Peer Swarming",
  ],
};

// Types
interface AccountabilityTask {
  user_id: string;
  topic: string;
  subfield: string;
  description: string;
  validator: string;
}

// Initial State
const getInitialAccountabilityTaskState = (
  userId: string
): AccountabilityTask => ({
  user_id: userId,
  topic: "",
  subfield: "",
  description: "",
  validator: "", // TODO: Slack Integration will cover this.
});

const AccountabilityDashboard: React.FC = () => {
  const { user } = useAuth();
  const userId = user?.uid ?? "";

  const [accountabilityTask, setAccountabilityTask] =
    useState<AccountabilityTask>(getInitialAccountabilityTaskState(userId));

  const { topic, subfield, description } = accountabilityTask;

  // Fetch user accountability data
  const {
    data,
    loading: accountabilityLoading,
    error: accountabilityError,
  } = useQuery(GET_ACCOUNTABILITY_TASKS_BY_USER, {
    variables: { userId },
    skip: !userId,
  });

  // Mutation for inserting accountability task
  const [insertAccountabilityTask, { loading: inserting }] = useMutation(
    INSERT_ACCOUNTABILITY_MUTATION
  );

  // Handlers
  const handleChange = (name: keyof AccountabilityTask, value: string) => {
    setAccountabilityTask((prevTask) => ({
      ...prevTask,
      [name]: value,
      ...(name === "topic" && { subfield: "" }), // Reset subfield if topic changes
    }));
  };

  const validateForm = (): boolean => {
    return Boolean(topic && subfield && description);
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      alert("Please fill in all fields before submitting."); // Seems effective, but might not be the best UX Decision
      return;
    }

    try {
      const variables = { user_id: userId, topic, subfield, description };
      const response = await insertAccountabilityTask({ variables });
      resetTaskState();
    } catch (error) {
      console.error("An error occurred while submitting the task:", error);
    }
  };

  const resetTaskState = () => {
    setAccountabilityTask(getInitialAccountabilityTaskState(userId));
  };

  return (
    <div className="flex flex-col min-h-screen my-4 mx-4">
      <h2 className="text-2xl font-bold mb-4 text-center">
        {user?.displayName}'s Accountability Task:
      </h2>

      {/* Form */}
      <div className="mb-4">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1">
            <Dropdown
              label={topic || "Select Topic"}
              options={Object.keys(accountabilityMenuData)}
              onSelect={(value) => handleChange("topic", value)}
            />
          </div>
          <div className="flex-1">
            <Dropdown
              label={subfield || "Select Subfield"}
              options={topic ? accountabilityMenuData[topic] : []}
              onSelect={(value) => handleChange("subfield", value)}
            />
          </div>
        </div>
      </div>

      {/* Task Description */}
      <div className="mb-4">
        <label className="block mb-2">Task Description:</label>
        <textarea
          className="block w-full p-2 border border-gray-300 rounded"
          rows={4}
          value={description}
          onChange={(e) => handleChange("description", e.target.value)}
          placeholder="Enter task description..."
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <Button label="Submit" onClick={handleSubmit} disabled={inserting} />
      </div>

      {/* Accountability Heatmap */}
      <div className="flex justify-center">
        {accountabilityLoading ? (
          <LoadingComponent />
        ) : accountabilityError ? (
          <p>An error occurred while fetching data.</p>
        ) : (
          <AccountabilityHeatmap entries={data?.accountability} />
        )}
      </div>
    </div>
  );
};

export default AccountabilityDashboard;
