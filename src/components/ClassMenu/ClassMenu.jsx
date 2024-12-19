import React, { useContext, useState } from 'react';
import { TimerContext } from '../../Context/TimeContext';

const ClassMenu = ({ setEndClassMenu }) => {
  // Using context to access the stopTimer function
  const { stopTimer } = useContext(TimerContext);

  // State variables for selected reason and interruption reasons
  const [selectedReason, setSelectedReason] = useState('');
  const [interruptedReason, setInterruptedReason] = useState('');
  const [otherReasonText, setOtherReasonText] = useState('');

  // Handler to reset all the form values and close the class menu
  const handleCancel = () => {
    setSelectedReason('');
    setInterruptedReason('');
    setOtherReasonText('');
    setEndClassMenu(false);
  };

  // Handler to submit the form, stop the timer and log the data
  const handleSubmit = (e) => {
    e.preventDefault();
    stopTimer(); // Stops the timer
    console.log('Form submitted with:', { selectedReason, interruptedReason, otherReasonText });
    setEndClassMenu(false); // Closes the class menu
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
        {/* Close button */}
        <button
          onClick={handleCancel}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Select a reason to end class</h2>
        
        <form onSubmit={handleSubmit}>
          {/* Main Reason Options */}
          <div className="space-y-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                id="Class_completed"
                name="endClassReason"
                value="Class_completed"
                onChange={(e) => setSelectedReason(e.target.value)}
                className="hidden peer"
              />
              <span className="w-4 h-4 border-2 rounded-full peer-checked:bg-orange-500 peer-checked:border-orange-500 peer-checked:ring-2 peer-checked:ring-white peer-checked:ring-opacity-50 flex justify-center-center items-center relative">
                <span className="w-2 h-2 bg-white rounded-full opacity-0 peer-checked:opacity-100 absolute"></span>
              </span>
              <span className="text-gray-800">Class completed</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                id="Class_interrupted_aborted"
                name="endClassReason"
                value="Class_interrupted_aborted"
                onChange={(e) => setSelectedReason(e.target.value)}
                className="hidden peer"
              />
              <span className="w-4 h-4 border-2 rounded-full peer-checked:bg-orange-500 peer-checked:border-orange-500 peer-checked:ring-2 peer-checked:ring-white peer-checked:ring-opacity-50 flex justify-center items-center relative">
                <span className="w-2 h-2 bg-white rounded-full opacity-0 peer-checked:opacity-100 absolute"></span>
              </span>
              <span className="text-gray-800">Class interrupted/aborted</span>
            </label>
          </div>

          {/* Subset Reason Options for Interrupted/Aborted Class */}
          {selectedReason === 'Class_interrupted_aborted' && (
            <div className="pl-7 mt-4">
              <h3 className="text-lg font-medium text-gray-700 mb-2">Select a specific reason:</h3>
              <div className="space-y-2">
                {/* Options for interruption reasons */}
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="student_no_show_class"
                    name="interruptedReason"
                    value="student_no_show_class"
                    onChange={(e) => setInterruptedReason(e.target.value)}
                    className="hidden peer"
                  />
                  <span className="w-4 h-4 border-2 rounded-full peer-checked:bg-orange-500 peer-checked:border-orange-500 peer-checked:ring-2 peer-checked:ring-white peer-checked:ring-opacity-50 flex justify-center items-center relative">
                    <span className="w-2 h-2 bg-white rounded-full opacity-0 peer-checked:opacity-100 absolute"></span>
                  </span>
                  <span className="text-gray-800">Student didn't show up for the class</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="student_no_interest"
                    name="interruptedReason"
                    value="student_no_interest"
                    onChange={(e) => setInterruptedReason(e.target.value)}
                    className="hidden peer"
                  />
                  <span className="w-4 h-4 border-2 rounded-full peer-checked:bg-orange-500 peer-checked:border-orange-500 peer-checked:ring-2 peer-checked:ring-white peer-checked:ring-opacity-50 flex justify-center items-center relative">
                    <span className="w-2 h-2 bg-white rounded-full opacity-0 peer-checked:opacity-100 absolute"></span>
                  </span>
                  <span className="text-gray-800">Student didn't show any interest</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="student_got_disconnected"
                    name="interruptedReason"
                    value="student_got_disconnected"
                    onChange={(e) => setInterruptedReason(e.target.value)}
                    className="hidden peer"
                  />
                  <span className="w-4 h-4 border-2 rounded-full peer-checked:bg-orange-500 peer-checked:border-orange-500 peer-checked:ring-2 peer-checked:ring-white peer-checked:ring-opacity-50 flex justify-center items-center relative">
                    <span className="w-2 h-2 bg-white rounded-full opacity-0 peer-checked:opacity-100 absolute"></span>
                  </span>
                  <span className="text-gray-800">Student got disconnected</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="teacher_got_disconnected"
                    name="interruptedReason"
                    value="teacher_got_disconnected"
                    onChange={(e) => setInterruptedReason(e.target.value)}
                    className="hidden peer"
                  />
                  <span className="w-4 h-4 border-2 rounded-full peer-checked:bg-orange-500 peer-checked:border-orange-500 peer-checked:ring-2 peer-checked:ring-white peer-checked:ring-opacity-50 flex justify-center items-center relative">
                    <span className="w-2 h-2 bg-white rounded-full opacity-0 peer-checked:opacity-100 absolute"></span>
                  </span>
                  <span className="text-gray-800">I got disconnected</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="other_reason"
                    name="interruptedReason"
                    value="other_reason"
                    onChange={(e) => {
                      setInterruptedReason(e.target.value);
                      setOtherReasonText('');
                    }}
                    className="hidden peer"
                  />
                  <span className="w-4 h-4 border-2 rounded-full peer-checked:bg-orange-500 peer-checked:border-orange-500 peer-checked:ring-2 peer-checked:ring-white peer-checked:ring-opacity-50 flex justify-center items-center relative">
                    <span className="w-2 h-2 bg-white rounded-full opacity-0 peer-checked:opacity-100 absolute"></span>
                  </span>
                  <span className="text-gray-800">Other reason</span>
                </label>
                {/* Display a textarea for "Other reason" */}
                {interruptedReason === 'other_reason' && (
                  <textarea
                    rows={4}
                    id="other_reason_text"
                    name="other_reason_text"
                    placeholder="Type here..."
                    value={otherReasonText}
                    onChange={(e) => setOtherReasonText(e.target.value)}
                    className="w-full mt-2 p-2 border rounded text-gray-700"
                  />
                )}
              </div>
            </div>
          )}

          {/* Submit and Cancel Buttons */}
          <div className="mt-6 flex justify-start space-x-2">
            <button
              type="submit"
              className="bg-primary text-white px-9 py-2 rounded hover:bg-primary-dark"
            >
              End Class
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="bg-white text-gray-800 px-9 py-2 rounded hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClassMenu;
