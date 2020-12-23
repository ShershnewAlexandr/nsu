module.exports = `
        <h1 style="text-align: center;">Greeting!</h1>
        <p>
        My name is Ivan. I'm a computer science researcher and developer.
        My research interests span an area of compiler construction and optimization,
        code generation and polyhedral compilation, operating systems construction
        and parallel programming tools, processor architectures and their microarchitecture
        specificies.
        </p>
        <h2>Education</h2>  
        <p>
          <table>
            <tr>
              <td class="years">2013 - 2016</td>
              <td>
                Post-graduate student in Computer Science, Siberian State University of Telecommunications
                and Information Sciences, Novosibirsk, Russia
              </td>
            </tr>
            <tr>
              <td class="years">2011 - 2013</td>
              <td>
                M.S. in Computer Science, Siberian State University of Telecommunications
                and Information Sciences, Novosibirsk, Russia
              </td>
            </tr>
            <tr>
              <td class="years">2007 - 2011</td>
              <td>
                B.S. in Computer Science, Siberian State University of Telecommunications
                and Information Sciences, Novosibirsk, Russia
              </td>
            </tr>
          </table>
          In 2018 I’ve taken my Candidate of Science degree (PhD) at computer science! My PhD thesis is the result
          of the research I have done at the <a href="https://csc.sibsutis.ru/">Computer Systems Departament</a>
          under the guidance of Prof. <a href="http://www.mkurnosov.net/">Mikhail Kurnosov</a>. This research
          is focused on the three parallelism levels in computer systems: process level parallelism over
          distributed system nodes, multithreading on a multiprocessor node
          and instruction level parallelism + data level parallelism (SIMD) on a superscalar processor core.
        </p>
        <p>
          On the level of process parallelism I have studied the compiler for
          <a href="http://x10-lang.org/">IBM X10</a> language that uses
          the <a href="https://en.wikipedia.org/wiki/Partitioned_global_address_space">Partitioned Global Address Space</a>
          (PGAS) model over the distributed memory of system nodes. 
        </p>
        <p>
          While the multithreading research I have given my attention to the problem  of threads synchronization.
          This part is devoted to the internals of the
          <a href="https://en.wikipedia.org/wiki/Software_transactional_memory">Software Transactional Memory</a>
          in GCC compiler (libitm).
        </p>
        <p>
          The third part of my thesis describes the results of the study of automatic vectorization
          by compilers (LLVM/Clang, GCC). In this part I have also done some experiments with X86 hardware
          performance counters and the microarchitectural optimization (optimization of issue ports using).
        </p>
        <h2>Teaching</h2>
        <p>
        During post-graduate studying I have done lecturing by the courses:
        <ul>
          <li>Theory of Distributed Computer Systems Functioning Organization</li>
          <li>Operating systems</li>
        </ul>
        </p>
    `;