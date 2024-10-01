import { useMutation } from "@apollo/client";
import { useState } from "react";
import AccountabilityHeatmap from "../../../components/accountability/AccountabilityHeatmap";
import { Button } from "../../../components/ui/Button";
import Dropdown from "../../../components/ui/Dropdown";
import { INSERT_ACCOUNTABILITY_MUTATION } from "../../../graphql/studentPortal/accountability/insertAccountabilityTask";
import { useAuth } from "../../../lib/authContext";

const accountabilityMenuData = {
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

interface Entry {
  creationDate: string;
  isCompleted: boolean | null;
}

const mockEntries: Entry[] = [
  // Add your mock data here
  { creationDate: "2024-01-01T12:00:00Z", isCompleted: true },
  { creationDate: "2024-02-05T12:00:00Z", isCompleted: false },
  { creationDate: "2024-03-10T12:00:00Z", isCompleted: true },
  { creationDate: "2024-04-15T12:00:00Z", isCompleted: false },
  { creationDate: "2024-05-20T12:00:00Z", isCompleted: true },
  { creationDate: "2024-06-25T12:00:00Z", isCompleted: false },
  { creationDate: "2024-07-30T12:00:00Z", isCompleted: true },
  { creationDate: "2024-08-05T12:00:00Z", isCompleted: false },
  { creationDate: "2024-09-10T12:00:00Z", isCompleted: true },
  { creationDate: "2024-10-15T12:00:00Z", isCompleted: false },
  { creationDate: "2024-11-20T12:00:00Z", isCompleted: true },
  { creationDate: "2024-12-25T12:00:00Z", isCompleted: false },
];

const initialAccountabilityTaskState = (user) => ({
  user_id: user.uid,
  topic: "",
  subfield: "",
  description: "",
  validator: "", // Can be auto-filled later
});

// Utility function to reset state
const resetTaskState = (user, setTaskState) => {
  setTimeout(() => {
    setTaskState(initialAccountabilityTaskState(user));
  }, 1000);
};

function AccountabilityDashboard() {
  const { user } = useAuth();
  const [accountabilityTask, setAccountabilityTask] = useState(
    initialAccountabilityTaskState(user)
  );
  const [insertAccountabilityTask, { loading, error }] = useMutation(
    INSERT_ACCOUNTABILITY_MUTATION
  );

  const { user_id, topic, subfield, description } = accountabilityTask;

  const handleChange = (name, value) => {
    setAccountabilityTask((prevTask) => {
      if (name === "topic") {
        // If topic changes, reset subfield
        return { ...prevTask, topic: value, subfield: "" };
      } else {
        // For other changes (including subfield), just update the specified field
        return { ...prevTask, [name]: value };
      }
    });
  };

  const handleSubmit = async () => {
    const variables = { user_id, topic, subfield, description };

    try {
      const { data } = await insertAccountabilityTask({ variables });
      console.log("Task inserted:", data.insert_accountability_one);
      resetTaskState(user, setAccountabilityTask);
    } catch (error) {
      handleError(error);
    }
  };

  // Consolidate error handling logic
  const handleError = (error) => {
    if (error.graphQLErrors) {
      console.error("GraphQL Errors:", error.graphQLErrors);
    }
    if (error.networkError) {
      console.error("Network Error:", error.networkError);
    }
  };

  return (
    <div className="flex flex-col min-h-screen my-4 mx-4">
      <h2 className="text-2xl font-bold mb-4 text-center">
        {user.displayName}'s Accountability Task:
      </h2>

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

      <div className="flex justify-end">
        <Button label="Submit" onClick={handleSubmit} disabled={loading} />
      </div>

      <div className="flex justify-center">
        <AccountabilityHeatmap entries={mockEntries} />
      </div>

      {error && (
        <div className="text-red-500">An error occurred. Please try again.</div>
      )}
    </div>
  );
}

export default AccountabilityDashboard;
