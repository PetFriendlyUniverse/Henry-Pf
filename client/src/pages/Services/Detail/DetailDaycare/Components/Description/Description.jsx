import { Tabs } from "flowbite-react";

function Description(description) {
  return (
    <div className="w-full rounded-b-lg border-l-2 border-r-2 border-b-2 border-russianviolet bg-zinc-500 text-black">
      <div className="h-full min-h-[200px] w-full bg-gray-100">
        <Tabs.Group aria-label="Tabs with underline" style="underline">
          <Tabs.Item title="Descripción">
            <div>
              <h6>No hay una descripcion disponible</h6>
            </div>
          </Tabs.Item>
          <Tabs.Item title="Comentarios">
            No hay comentarios disponibles
          </Tabs.Item>
        </Tabs.Group>
      </div>
    </div>
  );
}

export default Description;
