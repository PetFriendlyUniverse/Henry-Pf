import { Tabs } from "flowbite-react";

function Description(description) {
  return (
    <div className="">
      <div className="mt-20 h-full min-h-[200px] w-full bg-gray-100">
        <Tabs.Group aria-label="Tabs with underline" style="underline">
          <Tabs.Item title="Descripción">
            <div>
              <h6>{`${description}`}</h6>
            </div>
          </Tabs.Item>
          <Tabs.Item title="Comentarios"></Tabs.Item>
        </Tabs.Group>
      </div>
    </div>
  );
}

export default Description;
