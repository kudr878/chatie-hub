import { SillyMarkdown } from "../markdown/SillyMarkdown";
const testText = `Desc: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia velit a felis cursus, nec hendrerit nulla faucibus. Vivamus pretium, orci a tincidunt lacinia, odio sapien convallis justo, eget fermentum ligula sapien vel lectus. Sed sit amet sapien nec mauris suscipit elementum. Morbi rutrum justo vitae erat cursus, a eleifend libero posuere. Praesent eget dolor eget leo facilisis laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti. Integer eget ex in nisi cursus viverra. Phasellus quis justo sit amet sapien facilisis  cursus. Vestibulum vitae diam nec justo porttitor efficitur. Cras non sapien et lectus pretium luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia velit a felis cursus, nec hendrerit nulla faucibus. Vivamus pretium, orci a tincidunt lacinia, odio sapien convallis justo, eget fermentum ligula sapien vel lectus. Sed sit amet sapien nec mauris suscipit elementum. Morbi rutrum justo vitae erat cursus, a eleifend libero posuere. Praesent eget dolor eget leo facilisis laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti. Integer eget ex in nisi cursus viverra. Phasellus quis justo sit amet sapien facilisis cursus. Vestibulum vitae diam nec justo porttitor efficitur. Cras non sapien et lectus pretium luctus.`;

export default function LastChat({ notShow }: { notShow: string }) {
  return (
    <div className={`flex flex-col ${notShow ? "hidden" : ""}`}>
      <p className="bg-highlight py-1 px-5 max-w-max ml-5 rounded-t">Last Chat</p>

      <div className="bg-secondary px-5 py-5 flex flex-col gap-5 rounded">
        <p className="text-xl font-bold">Name: Lorem ipsum</p>

        <div className="flex gap-5">
          <div className="bg-gray-600 w-30 aspect-square shrink-0" />

          <div>
            <div className="line-clamp-5">
              <SillyMarkdown text={testText} />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-xs flex flex-col lg:gap-10"><span>Last chat: 1 min ago</span><span>20 messages</span></p>
          <button className="cursor-pointer bg-blue-400 py-1 px-2 lg:px-6 rounded text-white text-sm ">Continue chat</button>
        </div>

      </div>

    </div>
  )
}