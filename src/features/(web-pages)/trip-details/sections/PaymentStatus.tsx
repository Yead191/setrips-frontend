
export const PaymentStatus = () => {
  return (
    <div className="bg-white rounded-[24px] p-5 border border-gray-100 shadow-sm space-y-4">
      <h3 className="text-lg font-medium text-gray-900 leading-none">Payment Status</h3>

      <div className="space-y-1.5 pt-0">
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-400 font-normal">Payment Method</span>
          <div className="flex items-center gap-2">
            <div className="flex items-center text-blue-800 font-bold italic">
              <span className="sr-only">Visa</span>
              <svg className="w-8 h-4" viewBox="0 0 24 15" fill="currentColor">
                <path d="M0 0h24v15H0z" fill="none" />
                <path d="M9.1 11.5L6.6 2h1.4l1.8 7.2L12.1 2h1.4l-4.4 9.5zM15.4 11.5L13.1 2h1.4l1.8 7.3L18.6 2h1.4l-4.6 9.5z" fill="currentColor" />
              </svg>
            </div>
            <span className="text-gray-900 font-semibold">**** 1234</span>
          </div>
        </div>
        <InfoRow label="Transaction ID" value="TXN-789456123" />
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-400 font-normal">Status</span>
          <span className="px-3 py-1 bg-[#EAFDF5] text-[#10B981] rounded-full text-[10px] font-bold flex items-center gap-1">
            <div className="w-1 h-1 rounded-full bg-[#10B981]" /> Paid
          </span>
        </div>
        <InfoRow label="Payment Date" value="Mar 12, 2024" />
      </div>
    </div>
  );
};

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between items-center text-sm">
    <span className="text-gray-400 font-normal">{label}</span>
    <span className="text-gray-900 font-semibold">{value}</span>
  </div>
);
