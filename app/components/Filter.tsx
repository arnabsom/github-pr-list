interface FilterProps {
    uniqueLabels: string[];
    selectedLabel: string;
    setSelectedLabel: (label: string) => void;
}

export default function Filter({ uniqueLabels, selectedLabel, setSelectedLabel }: FilterProps) {
    return (
    <div className="mb-4">
        <button style={{ marginRight: "16px", marginLeft: "16px" }} onClick={() => setSelectedLabel("")} className={`px-4 py-2 mr-2 rounded ${selectedLabel === "" ? "bg-blue-500 text-white" : "bg-gray-300"}`}>
        All
        </button>
        {uniqueLabels.map((label) => (
        <button style={{ marginRight: "16px", marginLeft: "16px" }} key={label} onClick={() => setSelectedLabel(label)} className={`px-4 py-2 mr-2 rounded ${selectedLabel === label ? "bg-blue-500 text-white" : "bg-gray-300"}`}>
            {label}
        </button>
        ))}
    </div>
    );
}
