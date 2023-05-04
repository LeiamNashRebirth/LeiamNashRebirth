//project leiam back to zero
const { get }  = require("axios");
const { writeFileSync, createReadStream } = require("fs-extra");

//url or ano trip mo basta maka request 
const leiam = "https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcRtyprK79w-8FugPwcu-UD-Xx1sOw6bSuurJg&usqp=CAU";

//basta messenger to sa reply event
const leiam = event.messageReply.attachments[0].url;

//pede rin args bahala ka sa buhay mo
const leiamnash = args.join(" ");
const leiam = leiamnash.match(/(https?:\/\/.*\.(?:png|jpg|jpeg))/g)

//tas bahala kana mag code ng if statement 
 if (leiam) {
//code mo malaki kana kaya mo nayan
}

//so need mo nalang e download at save file
 const leiamGet = (await get(`https://api.leiamnash.repl.co/art?image=${leiam}`, { responseType: 'arraybuffer' })).data;

//then save file syempre 
  const leiamFile = __dirname + "/cache/media/leiamnash_" + event.senderID + ".png";
	writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));

//tapus need mo na e send ang attachment
const leiamSave = createReadStream(leiamFile);

//bahala kana mag code anong send ang gusto mo anyways dahil matagal na ako wala sa mirai di ko na alam layout nun kaya ikaw na bahala babye
