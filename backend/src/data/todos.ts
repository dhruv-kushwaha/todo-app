import { IFullTaskType } from "../schema/taskSchema";

interface ITodoTypes {
  id: string;
  title: string;
  description: string;
  status?: "pending" | "in-progress" | "completed";
  dueDate?: Date | string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export const tasksDB: IFullTaskType[] = [
  {
    id: "46bc06d9-0bb9-42f0-b3b7-cacc2176acc4",
    title: "Crustulum abundans beatus.",
    description:
      "Custodia delibero solus. Aliquam hic tergiversatio. Bonus votum usus.",
    status: "in-progress",
    dueDate: "2024-05-26T00:14:55.870Z",
    createdAt: "2024-05-25T12:43:45.245Z",
    updatedAt: "2024-05-25T12:43:45.245Z",
  },
  {
    id: "0fd1e172-347d-45db-8cdb-066e5b2a0ba2",
    title: "Supra auctor spargo.",
    description:
      "Sponte peior uterque thorax. Tutamen verbera arto ancilla audax deprecator vos reprehenderit comis. Auditor blandior trucido depopulo cura desolo.",
    status: "completed",
    dueDate: "2024-05-25T19:55:45.357Z",
    createdAt: "2024-05-25T12:43:45.254Z",
    updatedAt: "2024-05-25T12:43:45.254Z",
  },
  {
    id: "35c1d21d-a24c-4db3-ac50-84945f69b532",
    title: "Angustus eaque culpa.",
    description:
      "Tutis sublime asper culpo desparatus apostolus cito. Anser coruscus anser. Hic advoco deserunt incidunt theologus appositus clam deporto causa.",
    status: "in-progress",
    dueDate: "2024-05-25T17:30:03.655Z",
    createdAt: "2024-05-25T12:43:45.255Z",
    updatedAt: "2024-05-25T12:43:45.255Z",
  },
  {
    id: "47c57822-1a57-4cce-b95b-23e581afa3dd",
    title:
      "Utrum coadunatio color apparatus aurum aegrotatio sed cum consectetur derideo.",
    description:
      "Repellendus alter absconditus sursum asperiores. Asporto illo textor adipisci nam sed sortitus totam conspergo theca. Suadeo solus demo.",
    status: "pending",
    dueDate: "2024-05-26T10:28:17.945Z",
    createdAt: "2024-05-25T12:43:45.256Z",
    updatedAt: "2024-05-25T12:43:45.256Z",
  },
  {
    id: "db2be0be-1547-4259-a6a2-dfd00bf1fe0a",
    title: "Sumptus tui crastinus at aliquid dolore.",
    description:
      "Thermae confero comptus videlicet statua similique a vivo decet asperiores. Temporibus tonsor thesaurus cetera traho. Charisma civis deserunt custodia vaco vobis minus.",
    status: "pending",
    dueDate: "2024-05-25T15:31:14.060Z",
    createdAt: "2024-05-25T12:43:45.256Z",
    updatedAt: "2024-05-25T12:43:45.256Z",
  },
  {
    id: "ad7cf673-efc6-4f1d-9ab4-2dd6fbda3409",
    title: "Voro voluptate coaegresco.",
    description:
      "Arbor creber considero debeo conspergo viriliter voco pecto voluptate. Nisi tero magni nam amplitudo defero. Consectetur substantia temptatio vigor adflicto avarus.",
    status: "pending",
    dueDate: "2024-05-25T22:16:19.906Z",
    createdAt: "2024-05-25T12:43:45.257Z",
    updatedAt: "2024-05-25T12:43:45.257Z",
  },
  {
    id: "294e7567-af9d-46d5-8caf-28d9d71f062c",
    title: "Maiores stipes molestiae.",
    description:
      "Vomito vallum cedo comptus spoliatio ulciscor socius conturbo vorago vita. Ciminatio pauper bis. Ver rem blandior autem.",
    status: "in-progress",
    dueDate: "2024-05-26T03:55:10.755Z",
    createdAt: "2024-05-25T12:43:45.257Z",
    updatedAt: "2024-05-25T12:43:45.257Z",
  },
  {
    id: "d3619879-d7b3-4b19-9d46-cb3f654445ed",
    title: "Venia ascit barba.",
    description:
      "Suadeo combibo quibusdam tergeo confero. Decipio anser defessus asper demergo terebro centum quisquam. Theatrum vito contego.",
    status: "pending",
    dueDate: "2024-05-25T20:36:31.664Z",
    createdAt: "2024-05-25T12:43:45.257Z",
    updatedAt: "2024-05-25T12:43:45.257Z",
  },
  {
    id: "b8a0cbbf-01ca-433e-9ded-5fb8ffcee7a3",
    title: "Taceo rem aiunt derideo omnis demens urbanus.",
    description:
      "Aptus verus vestrum corrigo color suadeo ducimus volubilis. Libero civitas virga utilis. Cogo vigor conicio accommodo chirographum.",
    status: "in-progress",
    dueDate: "2024-05-26T05:11:54.100Z",
    createdAt: "2024-05-25T12:43:45.257Z",
    updatedAt: "2024-05-25T12:43:45.257Z",
  },
  {
    id: "1ebea009-e590-4f39-9f25-1ac00b8dfa07",
    title: "Fuga usus charisma tepidus utique aegrotatio sint adhaero.",
    description:
      "Aptus eos audentia ducimus decor vestigium cognatus voluptatem abutor. Nostrum commodi tot voluntarius. Spectaculum articulus video aurum anser theatrum verbum asper.",
    status: "in-progress",
    dueDate: "2024-05-26T04:29:20.509Z",
    createdAt: "2024-05-25T12:43:45.258Z",
    updatedAt: "2024-05-25T12:43:45.258Z",
  },
  {
    id: "c2244f10-1cce-4fcf-97d4-2a26b14e6e4d",
    title: "Demo cupiditate tutamen terebro voluptate eius clibanus.",
    description:
      "Depereo vae crudelis impedit carbo aestas. Cornu sursum ventosus video suus atrox audacia. Adopto ater patruus quisquam bis vestigium deprecator veniam ipsa.",
    status: "in-progress",
    dueDate: "2024-05-25T18:28:46.501Z",
    createdAt: "2024-05-25T12:43:45.258Z",
    updatedAt: "2024-05-25T12:43:45.258Z",
  },
  {
    id: "1998cc10-1d89-45de-9d93-f0cda514e6b3",
    title: "Vilicus vitiosus tollo confero arma fugiat astrum supra considero.",
    description:
      "Peior antea compello cohibeo terga. Comminor vitiosus videlicet hic. Abscido dicta arcesso texo curis enim.",
    status: "pending",
    dueDate: "2024-05-25T21:44:54.495Z",
    createdAt: "2024-05-25T12:43:45.258Z",
    updatedAt: "2024-05-25T12:43:45.258Z",
  },
  {
    id: "ed0934e5-db3c-4746-8744-4e99bc9d0950",
    title: "Creator nulla turpis.",
    description:
      "Cernuus corporis aestivus cogito solus exercitationem correptius cuius arcus. Adulescens doloribus toties vomito. Timor torrens bonus solvo tego doloremque.",
    status: "completed",
    dueDate: "2024-05-25T14:46:59.649Z",
    createdAt: "2024-05-25T12:43:45.258Z",
    updatedAt: "2024-05-25T12:43:45.258Z",
  },
  {
    id: "45bb50fe-026e-4a1b-a0bf-72c21a3be6f0",
    title:
      "Vester baiulus allatus debilito termes umquam pauper verbera caries vetus.",
    description:
      "Tersus textus pauci. Campana cito censura suppono arguo alioqui ullam tactus. Tabella cimentarius saepe voro solitudo.",
    status: "completed",
    dueDate: "2024-05-26T07:40:56.434Z",
    createdAt: "2024-05-25T12:43:45.258Z",
    updatedAt: "2024-05-25T12:43:45.258Z",
  },
  {
    id: "68bb7b28-e724-47ec-b7ac-35fc8a5fa90c",
    title:
      "Sortitus corpus aureus cauda summopere sulum degero perferendis currus.",
    description:
      "Agnosco desidero creta. Deinde valeo culpa adsidue. Abundans et clam usque curso accusantium capillus abundans.",
    status: "completed",
    dueDate: "2024-05-25T13:19:34.988Z",
    createdAt: "2024-05-25T12:43:45.259Z",
    updatedAt: "2024-05-25T12:43:45.259Z",
  },
  {
    id: "bb9763d2-2fa8-4007-a323-ee336b19b27b",
    title:
      "Libero temperantia aestas infit tergiversatio demergo coaegresco repellat texo clibanus.",
    description:
      "Decipio xiphias odit. Harum caput cimentarius patior. Studio voluptates tabgo utilis.",
    status: "in-progress",
    dueDate: "2024-05-25T17:08:26.222Z",
    createdAt: "2024-05-25T12:43:45.259Z",
    updatedAt: "2024-05-25T12:43:45.259Z",
  },
  {
    id: "1a07bda7-a275-4bbb-bbc8-4b50af500f9f",
    title:
      "Audentia crapula adsum audentia adinventitias clam adsidue vitium audax.",
    description:
      "Supra volo cupressus utilis subito tertius usque timidus. Ducimus virtus cubicularis sonitus undique carbo caritas caelestis vehemens uberrime. Comprehendo terror carcer.",
    status: "completed",
    dueDate: "2024-05-25T21:04:38.575Z",
    createdAt: "2024-05-25T12:43:45.259Z",
    updatedAt: "2024-05-25T12:43:45.259Z",
  },
  {
    id: "1f7942f1-6e3c-47e0-b0bf-fbfa054ca5d2",
    title: "Tutamen adficio caterva virgo ut ulciscor.",
    description:
      "Bos aeneus depono curatio vilis tergum villa auctus infit suspendo. Cenaculum stips decretum triduana adfero adulatio theca video accusantium. Arguo perspiciatis temperantia clamo vomer quaerat aequus videlicet confero.",
    status: "pending",
    dueDate: "2024-05-25T22:53:19.388Z",
    createdAt: "2024-05-25T12:43:45.259Z",
    updatedAt: "2024-05-25T12:43:45.259Z",
  },
  {
    id: "6c26c675-35d4-4b64-aa2a-b8dea860a3ff",
    title: "Beatus absque ascisco comedo.",
    description:
      "Adeptio uter denuo cerno decerno. Versus decerno cura denuncio vilitas astrum alii utroque. Explicabo denego subseco considero.",
    status: "pending",
    dueDate: "2024-05-26T05:35:03.610Z",
    createdAt: "2024-05-25T12:43:45.259Z",
    updatedAt: "2024-05-25T12:43:45.259Z",
  },
  {
    id: "ac16a44e-e043-4cd5-9bf1-b032b0e63f6b",
    title: "Auctor tempore deprecator volup tres.",
    description:
      "Tutamen centum adsum consuasor amplitudo. Aperte tametsi tardus apostolus tego degusto studio. Adfero uredo thalassinus autem.",
    status: "completed",
    dueDate: "2024-05-26T09:36:53.923Z",
    createdAt: "2024-05-25T12:43:45.259Z",
    updatedAt: "2024-05-25T12:43:45.259Z",
  },
];
export const tasksDB1: IFullTaskType[] = [
  {
    title: "This is todo 4",
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    status: "pending",
    dueDate: "2024-05-25T09:40:02.697Z",
    id: "63b533c7-2fb3-42e4-a54b-a52bb8823151",
    createdAt: "2024-05-25T09:39:44.738Z",
    updatedAt: "2024-05-25T09:40:02.697Z",
  },
  {
    title: "todo 1234",
    description: "nkldnaklvnkldanvlkenlkvnkl",
    status: "in-progress",
    dueDate: "2024-05-23T09:53:00.000Z",
    id: "e3221dce-d77c-4dd8-92c2-2ddbb881d9ac",
    createdAt: "2024-05-25T09:54:18.441Z",
    updatedAt: "2024-05-25T10:23:02.084Z",
  },
  {
    title: "hello person",
    description: "nkclanncmnsmcnmwnkcn",
    status: "completed",
    dueDate: "2024-06-08T09:59:00.000Z",
    id: "b59baa6f-9143-40dc-8338-994a259242c9",
    createdAt: "2024-05-25T09:54:35.584Z",
    updatedAt: "2024-05-25T11:04:00.148Z",
  },
  {
    title: "This is todo 4",
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\n\n\n',
    status: "in-progress",
    dueDate: "2024-05-25T16:08:00.000Z",
    id: "f4d443ce-f3d5-43f9-8c93-97733ccff7a8",
    createdAt: "2024-05-25T11:08:27.932Z",
    updatedAt: "2024-05-25T11:08:27.932Z",
  },
  {
    title: "This is todo 5",
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\n\n\n',
    status: "pending",
    dueDate: "2024-05-21T11:08:00.000Z",
    id: "4af69e9b-7239-4e4e-b60a-5e1db8cadb95",
    createdAt: "2024-05-25T11:08:48.767Z",
    updatedAt: "2024-05-25T11:08:48.767Z",
  },
];
//  [
//   // {
//   //   title: "Todo 2",
//   //   description: "This is Todo 2",
//   //   status: "pending",
//   //   id: "2dc110ea-ae18-4325-b532-63967e56f6a4",
//   // },
//   // {
//   //   title: "Todo 1",
//   //   description: "This is Todo 1",
//   //   status: "completed",
//   //   id: "5627f338-ddba-4872-b790-1f55cda9b75b",
//   // },
//   {
//     title: "This is todo 4",
//     description:
//       'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
//     status: "pending",
//     dueDate: "2024-05-25T09:40:02.697Z",
//     id: "63b533c7-2fb3-42e4-a54b-a52bb8823151",
//     createdAt: "2024-05-25T09:39:44.738Z",
//     updatedAt: "2024-05-25T09:40:02.697Z",
//   },
//   {
//     title: "alkveaklvkjnkjenkj",
//     description: "nkldnaklvnkldanvlkenlkvnkl",
//     status: "in-progress",
//     dueDate: "2024-05-23T09:53:00.000Z",
//     id: "e3221dce-d77c-4dd8-92c2-2ddbb881d9ac",
//     createdAt: "2024-05-25T09:54:18.441Z",
//     updatedAt: "2024-05-25T09:54:18.441Z",
//   },
//   {
//     title: "cavlkqnklcwnkqlncklnkl",
//     description: "nkclanncmnsmcnmwnkcn",
//     status: "completed",
//     dueDate: "2024-06-08T09:59:00.000Z",
//     id: "b59baa6f-9143-40dc-8338-994a259242c9",
//     createdAt: "2024-05-25T09:54:35.584Z",
//     updatedAt: "2024-05-25T09:54:35.584Z",
//   },
// ];
