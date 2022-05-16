import React, { memo, useState } from "react";
import { Link } from "react-router-dom";
import useSelector from "@/hooks/useSelector";
import Modal from "@/components/ui/organisms/Modal";
import Styled from "./styled";

const Header = () => {
    const { name } = useSelector((root) => root.user);

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleCloseModal = () => {
        setIsOpen((preState) => !preState)
    }

    return (
        <Styled.Header>
            {isOpen && <Modal handleCloseModal={handleCloseModal}>
                <Styled.Filter>
                    <Styled.FilterHeader>
                        HEADER
                    </Styled.FilterHeader>
                    <Styled.Section>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, eius velit aliquid vero provident officia animi fugit earum incidunt cumque ipsam deserunt possimus consequuntur accusamus exercitationem minus at quae laudantium!
                        Itaque, dolore magnam? Expedita libero ullam id nam laborum, saepe possimus similique voluptatibus! Doloribus iste laborum officiis veniam neque reprehenderit quibusdam aliquid eos ipsam dignissimos, ipsa qui placeat deleniti autem?
                        Quaerat doloremque, amet voluptas maiores ab enim consequatur odit laudantium libero omnis similique nesciunt, hic cupiditate culpa quas accusantium! Possimus praesentium similique omnis aliquam fugiat reiciendis soluta tempore cumque eligendi!
                        Natus totam amet eaque error aliquid vitae minima, quidem impedit culpa placeat nesciunt nisi reprehenderit quia nostrum distinctio aspernatur quae, voluptatum ducimus! Aliquid qui adipisci dolores ipsum dolore voluptatibus odit?
                        Velit inventore hic ipsam facilis molestiae laboriosam enim cumque distinctio ad laborum rerum consectetur neque reprehenderit possimus optio accusantium quis laudantium sed dolor, officia dolorum consequuntur iste quae. Beatae, necessitatibus.
                        Eaque amet iure, laudantium eveniet eligendi, modi est quasi deserunt, ab aliquam earum sit illo accusamus omnis rerum obcaecati deleniti impedit corrupti laborum quas beatae expedita. Eveniet alias est dolores.
                        Explicabo reprehenderit illum vel laboriosam voluptates dolores. Voluptates officiis a voluptas inventore mollitia doloribus id assumenda veritatis, adipisci odit fugiat beatae debitis, impedit veniam officia corporis exercitationem nisi? Maxime, quisquam.
                        Fugiat unde aspernatur, tempore consequuntur illum repellat culpa debitis, quos sequi atque soluta pariatur provident adipisci. Recusandae reiciendis nemo fuga est mollitia vero aperiam, officiis nulla, dignissimos vel hic porro?
                        Hic quas sed provident nulla quis officiis placeat, impedit ducimus quisquam est quaerat, quae, ea labore. Ex vel ipsum, facilis doloremque, consectetur odio blanditiis, est aliquam minima laudantium veritatis ab!
                        Ut error voluptatum voluptatem fugiat ad magnam animi illum? Fugiat assumenda esse vitae error nisi ullam? Ea perferendis necessitatibus tempora minus. Nesciunt temporibus provident perferendis alias qui natus esse. Sapiente!
                        Obcaecati sunt nulla nihil quasi esse, cupiditate inventore quod magni pariatur ducimus commodi officiis minus? Praesentium at molestiae, deserunt unde magnam tempore quae ducimus dolorum libero. Eum quisquam doloribus recusandae?
                        Vero iure eveniet itaque pariatur autem quod odit, soluta accusamus culpa cumque quia hic ut repellat magni nisi, ab minus voluptatum fugit alias fugiat eligendi quas quis? Quos, ab esse.
                        Dicta aliquid, voluptatum facilis velit facere consequuntur repudiandae asperiores deleniti laudantium minus tempore quas sit debitis est natus non quos. Praesentium vitae ipsam dicta commodi facilis nemo hic quisquam distinctio?
                        Cumque, omnis ducimus. Dolore, adipisci pariatur! Ducimus quibusdam consequatur quasi et dicta delectus soluta blanditiis explicabo. Autem impedit fugiat, labore fuga ad exercitationem libero iure, itaque architecto quasi, dignissimos temporibus?
                        Quasi saepe accusamus voluptatum ullam deleniti tempora itaque dolorum maiores vel earum excepturi consectetur odit, incidunt in commodi amet cumque cupiditate ex, ut illum quibusdam optio dolorem voluptas. Eaque, reprehenderit.
                        Eaque ex illum laborum harum ut, iure dignissimos aliquid iste quod nihil obcaecati asperiores hic, officiis explicabo exercitationem similique adipisci, provident ipsam ad itaque corrupti. Accusantium, nemo deleniti. Aperiam, optio!
                        Quam, maxime nobis obcaecati atque enim earum accusantium, tempora nisi hic neque voluptatem dolores expedita porro iure voluptates, eos provident necessitatibus. Quia nesciunt ea vitae aspernatur illo veniam placeat cupiditate.
                        Hic voluptatum vel quod enim, necessitatibus, laborum optio quos veniam blanditiis sint deserunt assumenda quasi ad ratione odit, eaque sunt culpa. Quibusdam impedit maiores inventore dolorem aspernatur nobis eos natus.
                        Praesentium iusto optio unde quia ex illum veritatis sed totam molestias aliquid labore dicta est saepe officiis ducimus, quisquam aut animi! Necessitatibus, omnis quae? Possimus repellat voluptate nemo magni labore.
                        Ipsam facere, illo maiores sunt labore asperiores velit? Porro molestias laboriosam vero, maxime laudantium saepe at eligendi? Veritatis cumque officia molestiae esse animi hic, blanditiis corporis in, laudantium voluptate eos.
                        Expedita minus accusantium odio, fugit et saepe magnam adipisci earum ducimus tenetur porro maxime nobis magni provident repudiandae blanditiis corrupti enim optio perferendis delectus distinctio doloribus, omnis eligendi. Atque, excepturi.
                        Illum, ipsa cumque minus tempora quia quas quod facere consequatur, eos unde quae, doloremque porro iste deserunt alias vel ipsum veritatis. Blanditiis laborum odit et officia accusamus vel, voluptas fugit!
                        Minus obcaecati adipisci vitae debitis neque maiores blanditiis ut natus facilis quae saepe tenetur repellendus, aspernatur non ullam officiis itaque facere, eum dolor explicabo incidunt necessitatibus distinctio? Fuga, animi molestias.
                        Voluptates praesentium quidem consequatur nesciunt veniam veritatis voluptatem ea totam ducimus adipisci quae atque, optio fugiat libero quaerat culpa, deserunt ex soluta vero nisi dignissimos molestiae debitis? Veniam, ab hic.
                        Nam consequuntur eveniet velit repudiandae delectus atque qui laudantium? Quas, cupiditate deleniti voluptas quam voluptates dolorem eos modi laboriosam, error libero, pariatur fuga velit consectetur consequatur sapiente nulla ad vel?
                        Ducimus repudiandae ipsum, dolor molestias, cupiditate deleniti sed est minima eum adipisci asperiores ad omnis earum illum assumenda commodi doloremque accusamus sapiente. Ex eos aliquid officiis veritatis exercitationem in repellendus.
                        Tenetur repudiandae eius inventore dignissimos suscipit? Pariatur a quia veritatis, labore nam, recusandae animi minima accusamus fugit molestias quam excepturi rem quae aliquam vero et odit maxime, voluptates perspiciatis deserunt!
                        Magnam at accusamus minus repellat maiores consequuntur laborum, obcaecati ullam delectus reprehenderit dolorum et quibusdam, exercitationem voluptatibus unde velit odit. Eaque et provident minus ipsum a qui veritatis nulla? Itaque!
                        Nam architecto vitae consectetur explicabo obcaecati quos illo dignissimos suscipit dolor fugiat cum, error placeat eligendi? Dolor laudantium voluptatum dicta odio ad consequuntur, incidunt debitis! A necessitatibus corrupti perferendis itaque.
                        Fuga, vel? Voluptatum, facere culpa. Quia quod libero veniam mollitia vitae, facere accusantium rerum facilis, debitis, architecto quidem beatae iusto in consequuntur assumenda veritatis atque odit eligendi iure nostrum? Dolorum.
                        Aspernatur quasi eos perferendis autem ipsam dignissimos, odio nobis sed vero, atque commodi reiciendis, nisi possimus aperiam itaque! Quos officia labore laudantium, architecto molestiae quisquam! Incidunt quisquam eius modi repellat.
                        Earum rem sint id sit consectetur suscipit voluptas, quia repellendus quo repellat, perspiciatis ex. Qui aperiam ea atque est repudiandae provident odio sint expedita accusantium a, iure cum fuga consectetur?
                        Alias accusantium quaerat quo facere officia cum id adipisci provident deleniti fugit repellat nemo natus assumenda ducimus, dignissimos modi magni, excepturi consectetur quas molestias eos sit hic. Autem, iusto enim?
                        Aperiam earum quos eveniet fugiat, natus excepturi vitae distinctio delectus temporibus officiis a debitis recusandae dolores consequuntur deserunt error, reiciendis eaque animi asperiores sit! Quasi dolor eum recusandae quos nisi.
                        Tempore dolore accusamus repellat, libero magni enim, molestias temporibus delectus sequi neque itaque laborum reiciendis in! Dolorum nisi, rerum consequatur tempore repellendus fugit, laborum asperiores, a corporis ducimus dolore minima.
                        Molestiae repudiandae itaque dolor voluptas, quia explicabo nesciunt quaerat nemo, sed, provident officiis consequatur quibusdam ea eveniet vel quam dolores aspernatur. Corrupti aut mollitia quae temporibus quod ipsum, similique commodi!
                        Explicabo enim quidem odio ratione autem minima eum in ipsum officiis cum aut consequuntur sapiente dolores nostrum necessitatibus voluptatem, voluptatibus beatae a sequi, dolore corporis harum temporibus blanditiis odit? Reprehenderit.
                        Reprehenderit assumenda repellat enim consectetur ipsum nihil id inventore. Recusandae quidem a dolorem quasi cupiditate ut maxime iusto, hic iure aliquam aut id unde laudantium rem reprehenderit cumque vero doloribus!
                        Est illum provident numquam fuga quisquam ipsa vitae dolores quod ratione? Eos non doloremque quae ad hic quod optio voluptate consequuntur qui facere neque officia eaque, sit cumque. Aliquam, voluptatibus!
                        Repellendus illum vero accusamus libero voluptate. Fuga repellendus maxime ab eum, fugit autem sapiente aliquam! Voluptatum cumque aspernatur maxime quam iste. Similique eligendi illum eius perferendis fugiat repellendus cupiditate facere.
                        Dolores magni ducimus doloribus quasi temporibus explicabo, quibusdam porro culpa, quo libero esse eveniet atque sunt corrupti! Earum temporibus dolore accusantium voluptates dignissimos obcaecati, repellat harum perspiciatis cumque provident? Veritatis.
                        Eaque vel officiis ratione, sit, nihil repellendus sequi obcaecati similique dolores sunt alias corrupti ab laboriosam quod ad maiores delectus rerum temporibus officia ducimus doloribus reiciendis? Enim corrupti explicabo doloremque!
                        In eum perspiciatis consequuntur dolores reiciendis, recusandae deleniti harum ipsum similique repudiandae iusto quas quaerat dignissimos culpa dolorem neque sapiente vitae omnis aliquam autem. Porro odio possimus alias et veniam?
                        Temporibus in praesentium quis libero, voluptatibus quo deserunt fuga cupiditate neque consectetur repellat voluptatum, assumenda magni distinctio autem fugiat dignissimos tempore, quisquam voluptate! Odit cupiditate nulla excepturi autem, esse delectus?
                        Architecto neque obcaecati fugit vero dicta accusamus consectetur aperiam sequi qui doloremque corrupti recusandae aliquam incidunt eaque, veniam non officiis ipsum dolores nulla! Dolore dicta unde impedit, vel laboriosam corrupti.
                        Possimus consectetur voluptatibus at sint nisi odio qui repudiandae a repellat ut, voluptates non impedit ipsa, est voluptatum! Dolores provident reprehenderit autem omnis voluptate officiis delectus id tempore temporibus ipsa.
                        Fugit dicta numquam eius assumenda magni! Quae omnis nisi labore sit porro ducimus. Doloremque consequuntur at tenetur fugiat. Accusamus numquam sequi doloremque temporibus expedita. Accusamus dolore nemo suscipit dolores non!
                        Assumenda dolor cupiditate minus rem temporibus soluta vel porro dolorum, quo dolores fugiat recusandae aspernatur eveniet hic quod distinctio neque enim nobis sunt quidem? Nostrum ab odio facere ipsa ipsum.
                        Magni repellat maiores accusamus. Ullam magnam molestiae expedita natus. Ad laudantium explicabo voluptate illo modi. Repellendus deserunt officia ea debitis libero. Quo reprehenderit molestiae ullam, esse asperiores sit animi quisquam.
                        Placeat quis praesentium itaque numquam quam qui, ipsam iste tenetur blanditiis quae perferendis recusandae reprehenderit nemo eos, officiis nam enim error velit, natus quia! Nihil non laboriosam repudiandae et vel.
                        At eius suscipit, sequi impedit tenetur eveniet architecto quo consequatur neque blanditiis quos harum dolorum! Numquam reprehenderit repellat veritatis dicta saepe nobis quisquam! Saepe nulla itaque voluptatibus dolores! Ratione, in.
                        Suscipit minus velit praesentium inventore fugiat similique sequi ad deleniti dicta rerum tempore, provident aliquam sed labore officia minima cumque quam ducimus necessitatibus nesciunt animi! Quasi reiciendis earum eos rerum.
                        Debitis, porro? Deserunt ut enim earum voluptas adipisci fugiat modi vitae numquam, esse neque placeat, unde eos cumque eaque, dolorem cupiditate pariatur corporis. Asperiores quasi, dolorum voluptatibus enim nihil velit.
                        Aspernatur ducimus perspiciatis tenetur quod ipsa suscipit pariatur accusantium iure quisquam. Et voluptate reiciendis mollitia soluta distinctio earum error ratione, nam, numquam placeat eos adipisci rerum fugit. Deleniti, distinctio officiis?
                        Quod ipsam totam ut ipsa tempora doloribus nostrum commodi nihil eligendi, officia magni quae assumenda cum ratione minima neque repudiandae a! Eveniet eaque ex expedita nostrum facere amet, cumque quia!
                        Ea iure aperiam dicta reprehenderit hic sed nostrum architecto quos quam, magnam suscipit temporibus culpa debitis voluptatibus tempora fugiat accusantium. Nisi veniam labore itaque sequi perferendis tempora suscipit earum odio!
                        Iure quia repellendus commodi magni beatae? Saepe amet laudantium sapiente veniam omnis, incidunt esse nostrum odit error ea, pariatur quaerat tenetur asperiores, necessitatibus officia quam! In, voluptatum? Praesentium, vero amet.
                        Exercitationem nobis omnis modi et fugit eius debitis, dolorem nisi ratione dolorum ea, minus, officia dignissimos veniam distinctio quasi error possimus ipsam magnam? Exercitationem itaque deleniti numquam, sapiente eius blanditiis.
                        Vero exercitationem odit animi porro ducimus aut placeat consequuntur error consectetur quod eveniet laudantium mollitia totam sequi fuga vel, repellat quia possimus labore blanditiis ab deleniti quae! Deleniti, eveniet voluptate!
                        Repellendus recusandae vel ratione? Hic itaque pariatur incidunt, repellat molestiae et autem eaque. Placeat odit molestias doloremque adipisci consequatur quisquam exercitationem magni! Dolorem commodi dolor vero esse nostrum repellat nemo.
                        Quo cumque error ducimus nobis voluptatum saepe blanditiis, praesentium nesciunt veritatis non perspiciatis ad, dolores quos atque nisi. Facere eligendi dicta dignissimos totam commodi. Velit recusandae et ratione rem commodi.
                        Id adipisci dolor reprehenderit nisi rem dolores aperiam, sint dolorum et, fugit tempora ut saepe aut necessitatibus unde doloribus odit at sunt magni magnam facilis iusto. Harum temporibus optio ducimus?
                        Molestias tempore modi ratione dolores qui. Voluptas perspiciatis quam et minima asperiores sint accusantium eum totam sit. Aspernatur, doloremque eos vitae, sed, architecto cum necessitatibus odio dolores dolorem animi quas.
                        Ipsam eum rem illum quod dolorum dolores reiciendis, quo tempora cumque ut doloribus velit porro temporibus, voluptate laudantium debitis ullam quam repellat eaque deserunt. Maxime pariatur vero consequuntur expedita ipsum!
                        Autem temporibus consequatur id nihil repudiandae voluptate dignissimos unde quo praesentium obcaecati natus, consequuntur accusamus distinctio neque! Dolore cum atque repudiandae pariatur ratione, earum, qui minima similique a, commodi beatae.
                        Quia repellendus sed vero nisi adipisci itaque, deserunt nesciunt molestias facere expedita, deleniti quae suscipit pariatur molestiae qui repellat distinctio earum. Suscipit ea, eos placeat unde reprehenderit ratione quam reiciendis.
                        Iure, a cumque! Quod ullam inventore quia eaque perspiciatis tempore cupiditate. Nesciunt aspernatur ab dignissimos modi consequuntur ipsum doloribus non iure laboriosam adipisci eius nobis blanditiis, deserunt et qui eligendi.
                        Perspiciatis vitae suscipit veritatis voluptatibus neque aliquam, natus quae magni iusto sunt possimus assumenda officia omnis minima? Id neque omnis, nemo nisi fuga velit porro aliquid! Harum, quis fugiat! Nesciunt?
                        Tempore ratione quam eum debitis unde, quisquam ex repudiandae doloribus sed sit error nulla corrupti dolorum at! Consequatur harum modi impedit illum, excepturi alias quo ratione architecto mollitia tempore minus!
                        Suscipit ipsa officia iste aut, ut, autem praesentium eius excepturi delectus reprehenderit quod velit. Perferendis id est a dignissimos magni. Architecto accusantium quam consequuntur corporis fuga, in quasi aliquid sequi!
                        Natus harum omnis molestiae minima itaque qui vero vitae recusandae sequi quaerat repellendus tempora dolores repellat possimus fugit obcaecati, nesciunt a nostrum? Accusantium, odit dolorum. Ipsum cupiditate eveniet quam! Sapiente!
                        Quasi, cupiditate! Libero suscipit unde non quod asperiores sint harum atque placeat et quaerat temporibus maiores inventore, ea dignissimos ullam numquam quo ducimus dolore neque recusandae ad, obcaecati distinctio sequi.
                        Fugiat perferendis repellat ab necessitatibus atque. Excepturi cumque vitae magni obcaecati? Magnam quo dolorem qui pariatur, aperiam eum. Labore accusamus nam ab tempora perferendis earum atque aspernatur, molestiae consectetur quas.
                        Cum iste eveniet quae fugit magni dolorem quasi necessitatibus aspernatur iure consectetur? Ratione quas animi, exercitationem magnam rem tempora vel et praesentium molestias natus quis sapiente voluptatem facere consequuntur cupiditate.
                        Id in recusandae ab perferendis, ducimus illo! Vitae rerum minima laudantium, totam veniam assumenda accusamus quia eum saepe eveniet ut quae impedit obcaecati, perferendis quaerat. Quibusdam autem nam vel accusantium.
                        Repellat aspernatur tempore accusantium iusto excepturi, sed dolorem obcaecati ex amet aut quisquam, nisi maiores quaerat asperiores, in veritatis fuga maxime libero nulla impedit nihil. Unde sint eos deleniti architecto.
                        Qui eos consequuntur mollitia quae nisi officiis, veniam facere sunt consectetur illo laboriosam vel. Excepturi cupiditate consequatur eum voluptatum repellat, aperiam ullam? Vitae qui, ad ducimus quod assumenda ratione voluptates!
                        Voluptate culpa architecto optio, quia illo rem praesentium soluta assumenda tempora illum ducimus suscipit, officia, beatae enim distinctio aperiam perferendis eligendi totam iure deleniti quae quas! Nostrum, voluptatibus? Voluptate, esse.
                        Dignissimos magnam eius dolorem quam esse. Molestias, ratione quaerat praesentium repellendus eius rem mollitia quia nobis, consectetur ut explicabo reprehenderit. Harum, nesciunt aspernatur dolorum sit reprehenderit neque cumque quia quae!
                        Unde id ipsa error perferendis. Distinctio quam ullam numquam aliquid odit, voluptatem commodi minus saepe reprehenderit iure iste dignissimos voluptates in, architecto aperiam fugit veritatis libero assumenda explicabo, ex recusandae.
                        Deserunt distinctio deleniti necessitatibus suscipit, recusandae illum incidunt ad, facere sit explicabo quod culpa, aut dolores. Rem, nobis est natus molestias fuga reprehenderit, saepe magni voluptate nihil unde doloribus odio.
                        Accusamus, at ullam dolor quisquam dignissimos alias temporibus est voluptas maxime fuga quasi architecto? Iure dignissimos molestiae, quo, delectus incidunt blanditiis at repellat voluptates error eaque sit? Doloribus, voluptatibus non.
                        Quibusdam voluptatum dolore illo dignissimos illum consequatur eligendi corporis. Vitae placeat quaerat, voluptas, error atque sit ducimus quisquam quia ipsam officiis esse doloribus suscipit impedit nesciunt excepturi eos, voluptate veritatis?
                        Mollitia possimus provident accusantium voluptatibus ad quasi ipsum nemo minima placeat. Ad fugit facere, molestiae ratione vitae cupiditate aliquid porro expedita commodi in ut corrupti nobis iusto magnam fugiat cumque.
                        Explicabo dolore officia fugit. Ipsum nam inventore doloremque tempore. Dignissimos quis, ab vero voluptatem at adipisci, illum nulla repudiandae consectetur maiores dolorem provident autem quas voluptatum natus quidem optio recusandae!
                        Dicta beatae quis perferendis dignissimos praesentium? Voluptatem, rerum quod ipsa ipsum doloribus eligendi provident nesciunt sit mollitia eius commodi fugiat doloremque eos necessitatibus, veritatis sed! Ab omnis maiores dolorem minima?
                        Quaerat ipsam unde odit eius quam cum atque sunt, consectetur voluptatem maiores animi veniam nulla culpa dolore, totam earum placeat non. Nostrum quae repudiandae eveniet quibusdam quisquam quas odio dolore.
                        Laboriosam provident sit ab praesentium beatae? Molestiae incidunt dolore harum quis, rerum repellat. Consequuntur consectetur necessitatibus molestias, delectus error cum voluptatem quam accusamus illum tempora facere. Doloribus eum molestiae dignissimos.
                        Ratione consectetur aliquam quas cumque laudantium facere tempora impedit nisi inventore, rem repellendus amet minima placeat, iste libero fugit doloribus corrupti nostrum! Repellendus ad architecto reprehenderit libero. Ipsam, suscipit at.
                        Reiciendis cumque est aliquid. Mollitia cum debitis, aliquam quidem ipsam autem tempora commodi quia non dolorem sit, beatae vero, temporibus blanditiis eaque repellendus eveniet nostrum et voluptatem. Modi, dolorum repellat!
                        Quae iusto delectus perspiciatis dolor aliquam reiciendis nisi praesentium voluptatem culpa, tempora repellendus natus voluptate totam deleniti. Dolore adipisci maiores nisi odit, illum quis, iste vero, qui mollitia facilis eius?
                        Labore harum ex adipisci, temporibus quod, itaque veritatis dolorem consequatur rerum porro voluptatibus expedita reprehenderit accusamus sint repellendus impedit eaque earum quo, quibusdam exercitationem atque dolorum? Ipsam unde dolores quasi.
                        Facilis repellat quae totam provident expedita harum debitis sapiente, pariatur alias beatae? Eligendi magnam iusto itaque ex nulla omnis commodi ea quibusdam, quidem hic ipsam repudiandae dolores eos reiciendis quod!
                        Enim at, neque nam libero voluptatem repellat ratione iure quae molestias illum tempore. Consequatur velit, ea adipisci dolore odio odit soluta a culpa eum, asperiores maxime. Nobis officiis reiciendis nam!
                        Omnis deserunt ipsam modi aliquam quidem esse sit suscipit pariatur ducimus? Iure quam dicta repudiandae quibusdam nobis excepturi, praesentium provident ab ad consequuntur vitae. Facere autem dolorem vel odio rerum.
                        Ratione atque fugit in? Voluptate esse delectus laboriosam laborum. Illo, praesentium ea? Magnam facere, ea fugit mollitia saepe dolor rem laborum sint autem quibusdam quo aspernatur itaque tempore expedita eaque!
                        Explicabo atque eum distinctio. Inventore laborum atque, suscipit magni aperiam consequuntur animi non et ullam obcaecati vel sed assumenda amet porro eum provident dolores quos itaque fugiat. In, est sapiente.
                        Sint et, vel quis dolorum, non amet fugiat laboriosam deleniti quibusdam adipisci architecto consequuntur, rem reprehenderit distinctio optio praesentium cum? Natus nostrum nisi aperiam nihil, magnam minima temporibus quo? Non?
                        Sint exercitationem quaerat sed tempore, consectetur fugiat labore consequuntur nulla unde ducimus laborum neque quia laboriosam culpa rem quae quidem nam asperiores eum error aut beatae recusandae doloribus. Debitis, pariatur.
                        Mollitia quos sequi aspernatur ullam eos voluptatem tenetur necessitatibus a magni amet officiis temporibus animi perspiciatis earum praesentium nemo id inventore nesciunt consectetur alias illo aliquam, excepturi eveniet? Sunt, nisi?
                    </Styled.Section>
                    <Styled.BtnContainer>
                        <button>A</button>
                        <button>B</button>
                    </Styled.BtnContainer>
                </Styled.Filter>
            </Modal>}
            <Styled.Gnb>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/about">ABOUT</Link>
                </li>
                <li onClick={handleCloseModal}>
                    <h3>MODAL</h3>
                </li>
                <li>
                    <h3>환영합니다, {name}님!</h3>
                </li>
            </Styled.Gnb>
        </Styled.Header>
    );
};

export default memo(Header);
