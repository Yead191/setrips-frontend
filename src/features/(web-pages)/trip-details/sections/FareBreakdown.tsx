export const FareBreakdown = () => {
  return (
    <div className="bg-white rounded-[24px] p-5 border border-gray-100 shadow-sm space-y-4">
      <h3 className="text-lg font-medium text-gray-900 leading-none">Fare Breakdown</h3>

      <div className="space-y-1.5">
        <FareRow label="Base fare" value="$1000.00" />
        <FareRow label="Distance fare (15.2 mi)" value="$205.80" />
        <FareRow label="Time fare (35 min)" value="$8.75" />
        <FareRow label="Service charge" value="$5.50" />
        <FareRow label="Taxes & fees" value="$6.95" />
      </div>

      <div className="pt-2 border-t border-gray-100 flex flex-col items-end gap-1">
        <div className="flex justify-between w-full text-emerald-600 font-semibold mb-2">
          <span className="text-sm">First ride discount</span>
          <span className="text-sm">-$10.00</span>
        </div>
        <div className="flex justify-between w-full items-end pt-2">
          <div className="space-y-0.5">
            <p className="text-[12px] font-bold text-gray-400">Total Payable</p>
            <p className="text-sm text-gray-500 font-medium">Original price <span className="line-through text-gray-500">$1200.00</span></p>
          </div>
          <p className="text-2xl font-semibold text-[#111827] leading-none">$1080.00</p>
        </div>
      </div>
    </div>
  );
};

const FareRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between items-center">
    <span className="text-sm text-gray-500 font-normal">{label}</span>
    <span className="text-sm font-medium text-[#111827]">{value}</span>
  </div>
);
